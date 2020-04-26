import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

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

export default function blog() {
  const classes = useStyles();

  return (
    <Layout currentPage="Blog">
      <Container maxWidth="md" className={classes.container}>
        THIS PAGE IS UNDER CONSTRUCTION!
    </Container>
    </Layout>
  );
}
