import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CallToAction(props) {
  const { title, body, buttonText } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/donate">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}