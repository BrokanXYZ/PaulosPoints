import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '15px',
    marginBottom: '25px'
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © Paulo\'s Points '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="/privacyPolicy.html" target="_blank">
            Privacy policy
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}