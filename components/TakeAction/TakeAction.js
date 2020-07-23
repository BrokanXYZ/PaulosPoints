import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Link from '@material-ui/core/Link';

import CallToAction from './CallToAction.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  buttonRoot: {
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      'linear-gradient(to right, ' + theme.palette.secondary.main + ', ' + theme.palette.secondary.lessDark + ')',
    borderRadius: 50,
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  buttonLabel: {
    color: "white",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 700,
  },
  buttonContained: {
    minHeight: 30,
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none',
    },
  },
}));

export default function TakeAction(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="TakeAction" className={classes.title}>Take Action</Typography>
      <Container maxWidth="md">
        <Grid container spacing={10} justify="center">
          <Grid item xs={12} sm={6}>
            <Button 
              component={Link}
              href="/donate"
              variant="contained"
              classes={{root: classes.buttonRoot, label: classes.buttonLabel, contained: classes.buttonContained}}
            >
              Donate
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CallToAction title={content.callToAction1Title} body={content.callToAction1Body} pageLink="/apply"/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}