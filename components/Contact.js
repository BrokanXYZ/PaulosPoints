import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import ContactForm from './ContactForm.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" id="Contact" className={classes.title}>Contact</Typography>
      <Typography variant="h5">
        Checkout our <Link href="/FAQ">FAQ</Link>!
      </Typography>
      <ContactForm />
    </Container>
  );
}