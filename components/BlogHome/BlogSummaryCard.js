import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  blogDateText: {
    fontWeight: 'lighter'
  },
  readMoreListItem: {
    justifyContent: 'center'
  },
  LinkStyleOverride: {
    '&:hover': {
      textDecoration: 'none'
    }
  },
  blogCard: {
    paddingBottom: '5px !important'
  },
  subtitleContainer: {
    marginBottom: theme.spacing(4)
  },
  authorAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  dateText: {
    fontSize: '14px',
  },
  authorText: {
    fontSize: '14px'
  },
}));

export default function BlogSummaryCard(props) {
  const classes = useStyles();
  const { title, author, authorPicture, authorInitials, contentSummary, date, link } = props;

  return (
    <Card variant="elevation">
          <CardContent className={classes.blogCard}>

          <Link href={link} color="secondary" target="_blank">
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </Link>

            <Grid container direction="row" alignItems="center" className={classes.subtitleContainer}>
              <Grid item>
                {
                  authorPicture == null ?
                    <Avatar alt="Author Icon" className={classes.authorAvatar}>{authorInitials}</Avatar>
                  :
                    <Avatar alt="Author Icon" className={classes.authorAvatar} src={authorPicture}/>
                }
              </Grid>
              <Grid item direction="column">
                <Grid item>
                  <Typography className={classes.authorText}>
                    {author}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" className={classes.dateText}>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

          </CardContent>
    </Card>
  );
}