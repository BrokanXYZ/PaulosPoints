import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  responsiveImage: {
    width: '250px',
    height: 'auto',
    marginLeft: '40px'
  },
  missionStatement: {
    fontSize: '1.2rem',
    textAlign: 'justify'
  },
  missionStatementMobile: {
    fontSize: '1rem',
    textAlign: 'justify'
  },
  slogan: {
    color: theme.palette.secondary.main,
    fontSize: '1.5rem',
    fontStyle: 'italic',
    paddingTop: '20px',
  },
  sloganMobile: {
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
    fontStyle: 'italic',
    paddingTop: '10px',
    paddingBottom: '15px'
  },
  sloganDiv: {
    textAlign: 'center'
  }
}));

export default function OurMission(props) {
  const classes = useStyles();
  const { content, isMobile } = props;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container>
        <Grid item container direction="column" xs={12  } sm={7}>
          <Grid item>
            <Typography variant="h3" id="OurMission" className={classes.title}>
              Our Mission
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={ isMobile ? classes.missionStatementMobile: classes.missionStatement}>
              {content.missionStatement}
            </Typography>
          </Grid>
          <Grid item className={classes.sloganDiv}>
            <Typography variant="subtitle1" color="inherit" className={ isMobile ? classes.sloganMobile : classes.slogan}>
              Saving lives one mile at a time
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img className={classes.responsiveImage} src="/pauloCircle.png" />
        </Grid>
      </Grid>
    </Container>
  );
}