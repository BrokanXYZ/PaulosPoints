import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  callToActionCard: {
    height: '200px',
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const { title, body, buttonText, pageLink } = props;

  return (
    <Card variant="outlined" className={classes.callToActionCard}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          href={pageLink}
          variant="contained"
          color="secondary"
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}