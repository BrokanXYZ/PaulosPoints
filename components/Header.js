import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white'
  },
  toolbar: {
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  toolbarLink: {
    padding: '3px',
    flexShrink: 0,
  },
  responsiveImage: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 'auto',
  },
  facebookIcon: {
    color: '#4267B2',
  },
  twitterIcon: {
    color: '#1DA1F2',
  },
  instagramIcon: {
    color: 'black',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <img className={classes.responsiveImage} src="/mainLogo.png" />
          </Grid>
          <Grid item container xs={8} spacing={3} justify="flex-end" alignItems="flex-end">
            <Grid item><FacebookIcon fontSize="large" className={classes.facebookIcon}/></Grid>
            <Grid item><TwitterIcon fontSize="large" className={classes.twitterIcon}/></Grid>
            <Grid item><InstagramIcon fontSize="large" className={classes.instagramIcon}/></Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Grid container spacing={5} justify="space-evenly">
          {sections.map((section) => (
            <Grid item>
              <Button 
                key={section.title}
                href={section.url}
                className={classes.toolbarLink}
              >
                <Typography
                  variant="button"
                  color="textPrimary"
                >
                  {section.title}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}