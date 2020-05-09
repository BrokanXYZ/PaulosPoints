import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import BlogSummaryCard from './BlogSummaryCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
  blogGrid: {
    marginTop: theme.spacing(8),
  }
}));

const blogSummaryContent = [
  {
    title: "Launching Paulo's Points",
    author: "The Paulo\'s Points Team",
    date: "May 5, 2020",
    summary: "On May 5th 2020, the same day this site and the organization launches, Paulo would have been 24. Through Paulo’s points, Paulo can still achieve his dream of flying people around the world. Happy 24th Birthday Paulo!",
    link: "/blog/LaunchingPaulosPoints",
    authorInitials: "PPT"
  },
  {
    title: "How Camaraderie Changed my Life and How You Can Change Lives Too",
    author: "Jackson Beard",
    date: "May 8, 2020",
    summary: 
      <>
        <p>
        Hello There,
        </p>
        <p>
        I do not normally post on LinkedIn, but this is an exception. Paulo was an exception too. This is a story about Paulo Claudio, a longtime friend who inspired countless people in pursuit of his dreams of flight.
        </p>
      </>,
    link: "/blog/HowCamaraderieChangedMyLife",
    authorIcon: "/cardProfileImgs/jacksonProfile.jpg",
  },
  {
    title: "",
    author: "",
    date: "",
    summary: ""
  },
];

export default function BlogHome(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="Blog" className={classes.title}>Blog</Typography>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.blogGrid}>
        <Grid item xs={12} sm={4}>
          <BlogSummaryCard content={blogSummaryContent[1]}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <BlogSummaryCard content={blogSummaryContent[0]}/>
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
      </Grid>
    </Container>
  );
}