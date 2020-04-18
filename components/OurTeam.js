import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProfileCard from './ProfileCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  bodyTextContainer: {
    marginLeft: theme.spacing(0),
  },
  profileGrid: {
    marginTop: theme.spacing(8),
  }
}));

export default function OurTeam(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" id="OurTeam" className={classes.title}>Our Team</Typography>
      <Container maxWidth="md" className={classes.bodyTextContainer}>
        <Typography variant="body1" >
          {content.bodyText}
        </Typography>
      </Container>
      <Grid container direction="row" justify="space-evenly" spacing={10} className={classes.profileGrid}>
        {content.profiles.map((profile) => (
            <Grid item key={profile.name}>
              {<ProfileCard
                name={profile.name}
                role={profile.role}
                image={profile.image}
                linkedIn={profile.linkedIn}
              />}
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}