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

export default function BlogHome(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="Blog" className={classes.title}>Blog</Typography>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.blogGrid}>
        <Grid item xs={4}>
          <BlogSummaryCard />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </Container>
  );
}