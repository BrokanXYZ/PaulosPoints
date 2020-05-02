import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Layout from '../../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  dateText: {
    fontSize: '14px',
  },
  authorText: {
    fontSize: '14px'
  },
  bodyText: {
    fontSize: '16px'
  },
  authorAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  subtitleContainer: {
    marginBottom: theme.spacing(4)
  }
}));

export default function LaunchingPaulosPoints() {
  const classes = useStyles();

  return (
    <Layout currentPage="">
      <Container maxWidth="md" className={classes.container}>

        <Typography variant="h3" className={classes.title}>
          Launching Paulo's Points
        </Typography>

        <Grid container alignItems="center" className={classes.subtitleContainer}>
          <Grid item>
            <Avatar alt="Paulo's Points Icon" className={classes.authorAvatar}>PPT</Avatar>
          </Grid>
          <Grid item direction="column">
            <Grid item>
              <Typography className={classes.authorText}>
                The Paulo's Points Team
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" className={classes.dateText}>
                May 5, 2020
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body1" className={classes.bodyText}>
            <p>
              “We” are a team of six of Paulo’s friends who have worked together over the past 7 months to create the 501c3 non-profit and plan its online presence and branding. We developed the site and brand with Paulo’s passion for flight and Oklahoma State University in mind, and we hope that it shows. Everyone involved in the creation of Paulo’s Points knew Paulo well and will forever hold him in their hearts. Please reach out to us using our <Link href="/contact" color="secondary">contact us page</Link> if you find any issues so we can fix them as soon as possible.
            </p>

            <p>
              On May 5th 2020, the same day this site and the organization launches, Paulo would have been 24. Through Paulo’s points, Paulo can still achieve his dream of flying people around the world. Happy 24th Birthday Paulo!
            </p>

            <p>
              Paulo was an incredibly talented young pilot who was had just graduated from Oklahoma State University in May 2019. He had a lifelong dream of flying and was on the path to being a successful commercial airline pilot. Paulo was determined to reach this goal and had been pursuing flight since a very young age. For many of us, the main items we associated with Paulo were planes and his interest in flight. However, in June 2019, our dear friend Paulo Claudio died of cancer and was unable to achieve his dream of becoming a commercial airline pilot. A few months after the funeral, Paulo’s mother reached out and asked if we could help her start a foundation to support patients like Paulo who are in need of transportation and housing during treatment. While Paulo was undergoing treatment, he received support from organizations and discussed giving back in a similar way with his parents. The idea behind the foundation was to collect donations of frequent flyer miles, credit card rewards points, hotel rewards points, and even money to provide housing and transportation amenities to patients seeking care. As a team, we came up with the name Paulo’s Points through a voting process And so, by the powers vested to us by the government of the United States of America, Paulo’s Points was born as a 501c3 non-profit organization.
            </p>
        </Typography>

    </Container>
    </Layout>
  );
}
