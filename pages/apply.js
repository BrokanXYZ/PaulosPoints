import React from 'react';
import { makeStyles } from '@mui/styles';


import { withUserAgent } from 'next-useragent';
import { spacing } from '../components/Layout/theme';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import GetAppIcon from '@mui/icons-material/GetApp';

import Layout from '../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(4),
    marginBottom: spacing(15)
  },
  title: {
    marginBottom: spacing(4)
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
          Please download, print and complete the application. Once completed, please reach out to us using the <Link href="/contact" color="secondary">contact us</Link> form and we will coordinate transfer of the document with you.
        </Typography>
        <Button href="https://drive.google.com/u/0/uc?id=1DLvK5SSzyfZ8VOOXOefqCzYHPcIz0meV&export=download" target="_blank" variant="contained" color="secondary" className={classes.downloadButton}>
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
