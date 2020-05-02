import React from 'react';

import Link from 'next/link'

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
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main
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
    width: '178px',
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
  currentPageLink: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  notCurrentPageLink: {
    color: 'black',
    textDecoration: 'none'
  },
  headerTextNotCurrentPage: {
    '&:hover': {
      color: theme.palette.secondary.main
    },
  },
  headerTextCurrentPage: {
    '&:hover': {
      color: theme.palette.secondary.dark
    },
  },
  sectionHeaderContainer: {
    marginTop: '21px'
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, currentPage } = props;
  
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={0} justify="space-between">

          <Grid item>
            <Link href="/index">
              <img className={classes.responsiveImage} style={{cursor: 'pointer'}} src="/mainLogo.png" />
            </Link>
          </Grid>

          <Grid item container xs={5} spacing={2} justify="space-evenly" className={classes.sectionHeaderContainer}>
            {sections.map((section) => (
              <Grid item key={section.title}>
                <Link href={section.url}>
                  <a className={ section.title === currentPage ? classes.currentPageLink : classes.notCurrentPageLink }>
                    <Typography
                      variant="button"
                      color="inherit"
                      className={ section.title === currentPage ? classes.headerTextCurrentPage : classes.headerTextNotCurrentPage }
                    >
                      {section.title}
                    </Typography>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid item container xs={3} spacing={0} justify="flex-end" alignItems="flex-end">
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
    </AppBar>
  );
}