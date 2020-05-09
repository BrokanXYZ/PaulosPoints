import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
}));

export default function AboutUs(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="AboutUs" className={classes.title}>About Us</Typography>
      <Container maxWidth="md" className={classes.bodyTextContainer}>
        <Typography variant="body1" >
          {content.bodyText}
        </Typography>
      </Container>
    </Container>
  );
}