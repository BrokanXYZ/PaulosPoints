import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/Layout/Layout.js';
import GiveMoneyCard from '../components/GiveMoneyCard.js';
import GivePointsCard from '../components/GivePointsCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function donate() {
  const classes = useStyles();

  return (
    <Layout currentPage="Donate">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Donate
        </Typography>
        <Grid container spacing={10} justify="center">
          <Grid item xs={6}>
            <GivePointsCard />
          </Grid>
          <Grid item xs={6}>
            <GiveMoneyCard />
          </Grid>
        </Grid>
    </Container>
    </Layout>
  );
}
