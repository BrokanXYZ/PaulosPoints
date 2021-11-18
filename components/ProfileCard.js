import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    height: 200,
  },
  linkedInIcon: {
    color: '#2867B2',
  },
  gitHubIcon: {
    color: 'black',
  },
  cardContent: {
    padding: '15px'
  },
  name: {
    fontSize: '1rem',
    fontWeight: '500'
  }
});

export default function ProfileCard(props) {
  const classes = useStyles();
  const { name, role, image, linkedIn, gitHub } = props;

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <Grid container className={classes.cardContent}>
          <Grid container item xs={10}>
            <Grid item xs={12}>
              <Typography className={classes.name}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">
                {role}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <IconButton href={linkedIn} target="_blank" size="small">
              <LinkedInIcon fontSize="default" className={classes.linkedInIcon}/>
            </IconButton>
          </Grid>
        </Grid>
    </Card>
  );
}