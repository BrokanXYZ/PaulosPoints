import React from 'react';

import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import { spacing } from '../../components/Layout/theme';

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
    marginBottom: spacing(4)
  },
  authorAvatar: {
    width: spacing(11),
    height: spacing(11),
    marginRight: spacing(1),
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