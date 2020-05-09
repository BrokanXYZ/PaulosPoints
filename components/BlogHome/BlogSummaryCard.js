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
  const { content } = props;

  return (
    <Card variant="elevation">
          <CardContent className={classes.blogCard}>

            <Typography variant="h6" gutterBottom>
              {content.title}
            </Typography>

            <Grid container alignItems="center" className={classes.subtitleContainer}>
              <Grid item>
                {
                  content.authorInitials ?
                    <Avatar alt="Author Icon" className={classes.authorAvatar}>{content.authorInitials}</Avatar>
                  :
                    <Avatar alt="Author Icon" className={classes.authorAvatar} src={content.authorIcon}/>
                }
              </Grid>
              <Grid item direction="column">
                <Grid item>
                  <Typography className={classes.authorText}>
                    {content.author}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" className={classes.dateText}>
                    {content.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Typography variant="body1">
              {content.summary}
            </Typography>

            <List>
              <Link href={content.link} color="secondary" className={classes.LinkStyleOverride}>
                <ListItem button className={classes.readMoreListItem}>
                  <Typography variant="button">
                    Read More
                  </Typography>
                </ListItem>
              </Link>
            </List>

          </CardContent>
    </Card>
  );
}