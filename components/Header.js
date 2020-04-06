import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: '1px solid',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: '3px',
    flexShrink: 0,
  },
  responsiveImage: {
    width: '100%',
    height: 'auto',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
          <img className={classes.responsiveImage} src="/mainLogo.png" />
          </Grid>
          <Grid item container xs={8} spacing={3} justify="flex-end" alignItems="flex-end">
            <Grid item><FacebookIcon fontSize="large"/></Grid>
            <Grid item><TwitterIcon fontSize="large"/></Grid>
            <Grid item><InstagramIcon fontSize="large"/></Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}