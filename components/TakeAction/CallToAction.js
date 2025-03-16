import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';

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
    color: "black",
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