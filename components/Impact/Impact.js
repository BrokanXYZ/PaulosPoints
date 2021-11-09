import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Map from './Map.js';
<<<<<<< HEAD
=======
import { Paper } from '@material-ui/core';
>>>>>>> master

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
<<<<<<< HEAD
=======
  },
  metricGrid: {
    marginTop: "25px",
    marginBottom: "-30px"
  },
  metricGridItem: {
    textAlign: "center"
  },
  metricValue: {
    fontSize: "34px",
    fontWeight: "bolder"
  },
  metricLabel: {
    fontSize: "20px",
    fontWeight: "300",
    color: "rgb(144, 164, 174)"
>>>>>>> master
  }
}));

export default function Impact(props) {
  const classes = useStyles();
  const { content } = props;

  return (
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>Our Impact</Typography>
        <Container maxWidth="md" className={classes.bodyTextContainer}>
          <Typography variant="body1" >
            {content.bodyText}
          </Typography>
<<<<<<< HEAD
=======
          <Grid container spacing={0} justifyContent="center" alignItems="center" className={classes.metricGrid}>
            <Grid item xs={6} className={classes.metricGridItem}>
                <Typography className={classes.metricValue}>
                  11
                </Typography>
                <Typography className={classes.metricLabel}>
                  Patients helped
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.metricGridItem}>
              <Typography variant="h5" className={classes.metricValue}>
                3,391 miles
              </Typography>
              <Typography variant="h5" className={classes.metricLabel}>
                Travel paid for
              </Typography>
            </Grid>
          </Grid>
>>>>>>> master
        </Container>
          <Map />
      </Container>
  );
}