import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function apply() {
  const classes = useStyles();

  return (
    <Layout currentPage="Apply">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Apply
        </Typography>
        <Typography variant="body1">
          Application instructions should go right in the space right here lol!
        </Typography>
        <Button variant="contained" color="secondary" className={classes.downloadButton}>
          <GetAppIcon className={classes.getAppIcon}/>
          <Typography variant="button">
            Download Application
          </Typography>
        </Button>

      </Container>
    </Layout>
  );
}
