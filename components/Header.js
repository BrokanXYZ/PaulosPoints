import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
  toolbarButton: {
    padding: '3px',
    flexShrink: 0,
  },
  currentPageToolBarButton: {
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
  const { sections, currentPage } = props;
  
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <img className={classes.responsiveImage} src="/mainLogo.png" />
          </Grid>
          <Grid item container xs={8} spacing={3} justify="flex-end" alignItems="flex-end">
            <Grid item>
              <IconButton href="https://www.facebook.com/Paulos-Points-113325360329282" target="_blank">
                <FacebookIcon fontSize="large" className={classes.facebookIcon}/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton href="https://twitter.com/PauloFoundation" target="_blank">
                <TwitterIcon fontSize="large" className={classes.twitterIcon}/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton href="https://www.instagram.com/paulospoints/?hl=en" target="_blank">
                <InstagramIcon fontSize="large" className={classes.instagramIcon}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Grid container spacing={5} justify="space-evenly">
          {sections.map((section) => (
            <Grid item key={section.title}>
              <Button
                variant={section.title === currentPage ? "outlined" : "text"} 
                key={section.title}
                href={section.url}
                color="secondary"
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