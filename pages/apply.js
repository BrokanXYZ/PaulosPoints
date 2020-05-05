import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { withUserAgent } from 'next-useragent';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import GetAppIcon from '@material-ui/icons/GetApp';

import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  getAppIcon: {
    marginRight: "8px"
  },
  downloadButton: {
    marginTop: "20px"
  }
}));

function apply(props) {
  const classes = useStyles();
  const { ua, useragent } = props;

  const isMobile = ua.isMobile;

  return (
    <Layout currentPage="Apply" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Apply
        </Typography>
        <Typography variant="body1">
          We are currently working on our application process. If you are interested in receiving support, then please send us a message via our <Link href="/contact" color="secondary">contact page</Link>. We will notify you when we are ready.
        </Typography>
        <Button disabled variant="contained" color="secondary" className={classes.downloadButton}>
          <GetAppIcon className={classes.getAppIcon}/>
          <Typography variant="button">
            Download Application
          </Typography>
        </Button>

      </Container>
    </Layout>
  );
}

apply.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(apply);