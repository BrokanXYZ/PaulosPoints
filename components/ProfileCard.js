import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
  },
  gitHubIcon: {
    color: 'black',
  },
  cardContent: {
    padding: '15px'
  },
  hiddenRole: {
    color: 'white'
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
        <div className={classes.cardContent}>
          <Typography variant="h5">
            {name}
          </Typography>
          {
            role != '' ?
              <Typography variant="subtitle2" color="textSecondary">
                {role}
              </Typography>
              :
              <Typography variant="subtitle2" className={classes.hiddenRole}>
                role
              </Typography>
          }
          <IconButton href={linkedIn} target="_blank">
            <LinkedInIcon fontSize="default" className={classes.linkedInIcon}/>
          </IconButton>
          {
            gitHub != '' &&
            <IconButton href={gitHub} target="_blank">
              <GitHubIcon fontSize="default" className={classes.gitHubIcon}/>
            </IconButton>
          }
        </div>
    </Card>
  );
}