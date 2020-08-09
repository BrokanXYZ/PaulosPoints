import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import CallToAction from './CallToAction.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function TakeAction(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="TakeAction" className={classes.title}>Take Action</Typography>
      <Container maxWidth="md">
        <Grid container spacing={10} justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <CallToAction buttonText="Donate" body={content.callToAction2Body} pageLink="/donate"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CallToAction buttonText="Apply for Assistance" body={content.callToAction1Body} pageLink="/apply"/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}