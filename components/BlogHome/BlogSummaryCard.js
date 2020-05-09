import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
}));

export default function BlogSummaryCard(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Card variant="elevation">
          <CardContent className={classes.blogCard}>
            <Typography variant="h6">
              {content.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom className={classes.blogDateText}>
              {content.date}
            </Typography>
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