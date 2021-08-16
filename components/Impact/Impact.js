import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Map from './Map.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}));

export default function Impact(props) {
  const classes = useStyles();
  const { content } = props;

  return (
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>Our Impact</Typography>
        <Container maxWidth="md" className={classes.bodyTextContainer}>
          <Typography variant="body1" >
            {content.bodyText}
          </Typography>
        </Container>
          <Map />
      </Container>
  );
}