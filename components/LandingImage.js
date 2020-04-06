import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    height: '500px',
    position: 'relative',
    backgroundColor: 'grey',
    color: 'white',
    marginTop: '30px',
    marginBottom: '4px',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: '3px',
    //[theme.breakpoints.up('md')]: {
    //  padding: theme.spacing(6),
    //  paddingRight: 0,
    //},
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${content.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={content.image} alt={content.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {content.title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}