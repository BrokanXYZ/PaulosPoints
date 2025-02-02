import React, { useState } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import { NameHelper } from '../utils/NameHelper'

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
  const { name, role, image, linkedIn } = props;
  const [ imageSrc, setImageSrc ] = useState(image);

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={name}
        />
        <Grid container className={classes.cardContent}>
          <Grid container item size={{xs: 10}}>
            <Grid item size={{xs: 12}}>
              <NameHelper name={name} setImageSrc={setImageSrc}>
                <Typography className={classes.name}>
                  {name}
                </Typography>
              </NameHelper>
            </Grid>
            <Grid item size={{xs: 12}}>
              <Typography variant="subtitle2" color="textSecondary">
                {role}
              </Typography>
            </Grid>
          </Grid>
          <Grid item size={{xs: 2}}>
            <IconButton href={linkedIn} target="_blank" size="small">
              <LinkedInIcon fontSize="default" className={classes.linkedInIcon}/>
            </IconButton>
          </Grid>
        </Grid>
    </Card>
  );
}