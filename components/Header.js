import React, { useState } from 'react';

import Link from 'next/link';

import { makeStyles } from '@mui/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { spacing } from '../components/Layout/theme';


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
    marginTop: spacing(2),
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
  buttonRoot: {
    minWidth: 100,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    marginBottom: '12px',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.secondary.lessDark,
    }
  },
  buttonLabel: {
    color: "white",
    textTransform: 'none',
    fontSize: 15,
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

export default function Header(props) {
  const classes = useStyles();
  const { sections, currentPage, isMobile } = props;

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open)
  };

  if(isMobile){
    return(
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={2}>

            <Grid item>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon/>
              </IconButton>
            </Grid>

            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List>
                <ListItem>
                  <Button 
                    href="/donate"
                    variant="contained"
                    classes={{root: classes.buttonRoot, label: classes.buttonLabel, contained: classes.buttonContained}}
                  >
                    Donate
                  </Button>
                </ListItem>
                {sections.map((section) => (
                  <ListItem item key={section.title}>
                    <Link legacyBehavior href={section.url}>
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
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>

            <Grid item>
              <Link href="/index">
                <img className={classes.responsiveImage} style={{cursor: 'pointer'}} src="/mainLogo.png" />
              </Link>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  else
  {
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={0} sx={{justifyContent: "space-between", width: "100%", height: "63px"}}>

            <Grid item>
              <Link href="/index">
                <img className={classes.responsiveImage} style={{cursor: 'pointer'}} src="/mainLogo.png" />
              </Link>
            </Grid>

            <Grid item container size={{ xs: 5}} spacing={2} sx={{justifyContent: "space-evenly"}} className={classes.sectionHeaderContainer}>
              {sections.map((section) => (
                <Grid item key={section.title}>
                  <Link legacyBehavior href={section.url}>
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

            <Grid item container size={{ xs: 3}} spacing={0} sx={{justifyContent: "flex-end", alignItems: "flex-end"}}>
              
              <Grid item>
                <Button 
                  href="/donate"
                  variant="contained"
                  classes={{root: classes.buttonRoot, label: classes.buttonLabel, contained: classes.buttonContained}}
                >
                  Donate
                </Button>
              </Grid>

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
}