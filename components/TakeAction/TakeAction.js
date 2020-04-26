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
        <Grid container spacing={10} justify="center">
          <Grid item xs={6}>
            <CallToAction title={content.callToAction1Title} body={content.callToAction1Body} buttonText={content.callToAction1ButtonText} pageLink="/apply"/>
          </Grid>
          <Grid item xs={6}>
            <CallToAction title={content.callToAction2Title} body={content.callToAction2Body} buttonText={content.callToAction2ButtonText} pageLink="/donate"/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}