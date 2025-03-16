import React from 'react';

import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import { spacing } from '../../components/Layout/theme';

const useStyles = makeStyles((theme) => ({
  blogDateText: {
    fontWeight: 'lighter',
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
    paddingBottom: '5px !important',
    height: "152px"
  },
  subtitleContainer: {
    marginBottom: spacing(2)
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
    <Card variant="outlined">
          <CardContent className={classes.blogCard}>
            <Grid container justifyContent="space-between" sx={{height: "100%"}}>
              <Grid item size={12}>
                <Link href={link} color="primary" target="_blank">
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                </Link>
              </Grid>
              <Grid size={12} item container direction="row" alignItems="flex-end" className={classes.subtitleContainer}>
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
                    <Typography className={classes.dateText}>
                      {date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
    </Card>
  );
}