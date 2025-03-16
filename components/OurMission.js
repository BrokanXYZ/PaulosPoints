import React from 'react';

import { makeStyles } from '@mui/styles';
import { spacing } from '../components/Layout/theme';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(10),
    marginBottom: spacing(10)
  },
  title: {
    marginBottom: spacing(4)
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
    color: 'black',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    paddingTop: '20px',
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationColor: "#FFA300"
  },
  sloganMobile: {
    color: 'black',
    fontSize: '1.25rem',
    fontStyle: 'italic',
    paddingTop: '10px',
    paddingBottom: '15px',
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationColor: "#FFA300"
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
        <Grid item container direction="column" size={{ xs: 12, sm: 7 }}>
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
            <Typography variant="subtitle1" className={ isMobile ? classes.sloganMobile : classes.slogan}>
              Saving lives one mile at a time
            </Typography>
          </Grid>
        </Grid>
        <Grid item size={{ xs: 12, sm: 5 }}>
          <img className={classes.responsiveImage} src="/pauloCircle.png" />
        </Grid>
      </Grid>
    </Container>
  );
}