import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { withUserAgent } from 'next-useragent';

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

function contact(props) {
  const classes = useStyles();

  const { ua, useragent } = props;

  const isMobile = ua.isMobile;

  return (
    <Layout currentPage="Contact" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Contact
        </Typography>
        <ContactForm />
      </Container>
    </Layout>
  );
}

contact.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(contact);