import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { withUserAgent } from 'next-useragent';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
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

            const blogPostDateString = new Date(blogPost.pubDate).toDateString();
            const dateStringWithoutDay = blogPostDateString.substr(4,blogPostDateString.length-4);
            const dateStringWithComma = dateStringWithoutDay.slice(0, 6) + ", " + dateStringWithoutDay.slice(6);

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
                          {dateStringWithComma}
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