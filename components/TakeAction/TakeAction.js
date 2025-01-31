import React from 'react';

import { makeStyles } from '@mui/styles';
import { spacing } from '../../components/Layout/theme';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import CallToAction from './CallToAction.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(15),
    marginBottom: spacing(15)
  },
  title: {
    marginBottom: spacing(4)
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