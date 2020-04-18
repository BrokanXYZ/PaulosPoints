import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layout.js';
import DonateCard from '../components/DonateCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function donate() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Donate
        </Typography>
        <Grid container spacing={4}>
          <Grid item>
            <DonateCard />
          </Grid>
        </Grid>
    </Container>
    </Layout>
  );
}
