import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  actionArea: {
    minHeight: '190px',
  },
  linkStyleOverride: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none"
    }
  },
  buttonRoot: {
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.secondary.lessDark,
    }
  },
  buttonLabel: {
    color: "white",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 700,
  },
  buttonContained: {
    minHeight: 30,
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none',
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const { body, pageLink, buttonText } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body1">
          {body}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center', padding: '0px 0px 12px 0px'}}>
        <Button 
          component={Link}
          href={pageLink}
          variant="contained"
          classes={{root: classes.buttonRoot, label: classes.buttonLabel, contained: classes.buttonContained}}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}