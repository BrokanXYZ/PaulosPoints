import React from 'react';
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
    fontWeight: '500',
  },
  blogDateText: {
    fontWeight: 'lighter'
  }
}));


const blogSummaries = [
  {
    title: 'Launching Paulo\'s Points',
    date: 'May 5, 2020',
    summary: '',
    picture: '',
    url: '/blog/LaunchingPaulosPoints',
  },
]


function blog(props) {
  const classes = useStyles();

  const { ua, useragent } = props;

  const isMobile = ua.isMobile;

  return (
    <Layout currentPage="Blog" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Blog
        </Typography>
        <List component="nav">
        {
          blogSummaries.map( blogSummary => (
            <>
              <Divider />
              <Link href={blogSummary.url} className={classes.linkStyleOverride}>
                <ListItem button>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography variant="body1" className={classes.blogTitleText}>
                        {blogSummary.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" color="textSecondary" className={classes.blogDateText}>
                        {blogSummary.date}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </Link>
            </>
          ))
        }
        </List>
    </Container>
    </Layout>
  );
}

blog.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(blog);