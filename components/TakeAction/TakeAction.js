import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import CallToAction from './CallToAction.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(6)
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
}));

export default function TakeAction(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" className={classes.title}>Take Action</Typography>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <CallToAction />
        </Grid>
        <Grid item xs={6}>
          <CallToAction />
        </Grid>
      </Grid>
    </Container>
  );
}