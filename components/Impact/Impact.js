import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Map from './Map.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}));

export default function Impact(props) {
  const classes = useStyles();

  return (
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>Our Impact</Typography>
        <Container maxWidth="md">
          <Grid container spacing={10} justify="center" alignItems="center">
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">Miles Flown</Typography>
              <Typography>706</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">Patients Helped</Typography>
              <Typography>1</Typography>
            </Grid>
          </Grid>
          <Map />
        </Container>
      </Container>
  );
}