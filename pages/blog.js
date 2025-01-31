import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@mui/styles';

import { withUserAgent } from 'next-useragent';
import { spacing } from '../components/Layout/theme';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(4),
    marginBottom: spacing(15)
  },
  title: {
    marginBottom: spacing(4)
  },
  linkStyleOverride: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none"
    }
  },
  blogTitleText: {
    fontWeight: '500'
  },
  blogTitleTextMobile: {
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '145px'
  },
  blogDateText: {
    fontWeight: 'lighter'
  }
}));


function blog(props) {
  const classes = useStyles();

  const { ua, blogPosts } = props;

  const isMobile = ua.isMobile;

  return (
    <Layout currentPage="Blog" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Blog
        </Typography>
        <List component="nav">
        {
          blogPosts.map( blogPost => {

            const blogPostDateWithoutTime = blogPost.pubDate.substr(0,10); "2020-01-15 3:00:23 AM"
            const blogPostMomentDate = moment(blogPostDateWithoutTime, "YYYY-MM-DD");
            const blogPostMomentDateString = blogPostMomentDate.format("MMM D, YYYY");

            return(
              <span
                key={blogPost.title}
              >
                <Divider />
                <Link href={blogPost.link} className={classes.linkStyleOverride} target="_blank">
                  <ListItem button>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Typography variant="body1" className={ isMobile ? classes.blogTitleTextMobile : classes.blogTitleText}>
                          {blogPost.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" color="textSecondary" className={classes.blogDateText}>
                          {blogPostMomentDateString}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </Link>
              </span>
            );
          })
        }
        </List>
    </Container>
    </Layout>
  );
}

blog.getInitialProps = async ctx => {
  const res = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paulospoints');
  const blogPosts = await res.data.items;

  return { useragent: ctx.ua.source, blogPosts: blogPosts}
}

export default withUserAgent(blog);