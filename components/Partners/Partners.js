import React from 'react';

import { makeStyles } from '@mui/styles';
import { spacing } from '../../components/Layout/theme';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(10),
    marginBottom: spacing(10)
  },
  title: {
    marginBottom: spacing(4)
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
        <Grid container spacing={10} justifyContent="center" alignItems="center">
          <Grid item size={{ sm: 6, md: 6 }} className={classes.logoItem}>
            <a href="https://www.flyingaggies.com/" target="_blank">
              <img src="logos/flyingAggiesLogo.png" className={classes.logo} />
            </a>
          </Grid>
          <Grid item size={{ sm: 6, md: 6 }} className={classes.logoItem}>
            <a href="http://www.thekerrfoundation.org/" target="_blank">
              <img src="logos/kerrFoundationLogo.png" className={classes.logo} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}