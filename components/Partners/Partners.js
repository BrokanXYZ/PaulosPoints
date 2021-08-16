import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  logoItem: {
    textAlign: 'center'
  }
}));

export default function Partners(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" className={classes.title}>Partners</Typography>
      <Container maxWidth="md">
        <Grid container spacing={10} justify="center" alignItems="center">
          <Grid item sm={6} md={4} className={classes.logoItem}>
            <a href="https://smile.amazon.com/ch/84-2542898" target="_blank">
              <img src="logos/amazonSmileLogo.png" className={classes.logo} />
            </a>
          </Grid>
          <Grid item sm={6} md={4} className={classes.logoItem}>
            <a href="https://www.flyingaggies.com/" target="_blank">
              <img src="logos/flyingAggiesLogo.png" className={classes.logo} />
            </a>
          </Grid>
          <Grid item sm={6} md={4} className={classes.logoItem}>
            <a href="http://www.thekerrfoundation.org/" target="_blank">
              <img src="logos/kerrFoundationLogo.png" className={classes.logo} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}