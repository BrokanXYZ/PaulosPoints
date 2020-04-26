import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ContactForm from '../components/ContactForm.js';
import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function donate() {
  const classes = useStyles();

  return (
    <Layout currentPage="Contact">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Contact
        </Typography>
        <ContactForm />
    </Container>
    </Layout>
  );
}
