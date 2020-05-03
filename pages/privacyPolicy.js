import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function privacyPolicy() {
  const classes = useStyles();

  return (
    <Layout currentPage="">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Privacy Policy
        </Typography>
        <Typography variant="body1">
          123
        </Typography>
      </Container>
    </Layout>
  );
}
