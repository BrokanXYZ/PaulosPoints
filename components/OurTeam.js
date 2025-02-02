import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { spacing } from '../components/Layout/theme';
import ProfileCard from './ProfileCard.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(15),
    marginBottom: spacing(15),
  },
  title: {
    marginBottom: spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
  profileGrid: {
    marginTop: spacing(8),
  }
}));

export default function OurTeam(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
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