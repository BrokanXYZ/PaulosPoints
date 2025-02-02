import React from 'react';

import { makeStyles } from '@mui/styles';
import { spacing } from '../../components/Layout/theme';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Map from './Map.js';
import { Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(15),
    marginBottom: spacing(15)
  },
  title: {
    marginBottom: spacing(4)
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
          <Grid container spacing={0} justifyContent="center" alignItems="center" className={classes.metricGrid}>
            <Grid item size={{xs: 6}} className={classes.metricGridItem}>
                <Typography className={classes.metricValue}>
                  35
                </Typography>
                <Typography className={classes.metricLabel}>
                  Patients helped
                </Typography>
            </Grid>
            <Grid item size={{xs: 6}} className={classes.metricGridItem}>
              <Typography variant="h5" className={classes.metricValue}>
                24,285 miles
              </Typography>
              <Typography variant="h5" className={classes.metricLabel}>
                Travel paid for
              </Typography>
            </Grid>
          </Grid>
        </Container>
          <Map />
      </Container>
  );
}