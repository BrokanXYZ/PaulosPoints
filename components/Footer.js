import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Paulo\'s Points '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'white',
    padding: '3px',
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </footer>
  );
}