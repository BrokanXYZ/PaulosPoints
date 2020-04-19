import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 195,
  },
  media: {
    height: 140,
  },
  linkedInIcon: {
    color: '#2867B2',
  }
});

export default function ProfileCard(props) {
  const classes = useStyles();
  const { name, image, linkedIn } = props;

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      <CardActions>
        <IconButton href={linkedIn} target="_blank">
          <LinkedInIcon fontSize="large" className={classes.linkedInIcon}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}