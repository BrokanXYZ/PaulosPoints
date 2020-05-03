import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const { title, body, pageLink } = props;

  return (
    <Card variant="outlined">
      <Link href={pageLink} className={classes.linkStyleOverride}>
        <CardActionArea className={classes.actionArea}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}