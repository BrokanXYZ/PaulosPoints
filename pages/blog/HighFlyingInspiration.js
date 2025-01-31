import React from 'react';
import { makeStyles } from '@mui/styles';


import { withUserAgent } from 'next-useragent';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

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

function HighFlyingInspiration(props) {
  const classes = useStyles();

  const { ua, useragent } = props;

  const isMobile = ua.isMobile;
  return (
    <Layout currentPage="" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>

        <Typography variant="h3" className={classes.title}>
          High-Flying Inspiration
        </Typography>

        <Grid container alignItems="center" className={classes.subtitleContainer}>
          <Grid item>
            <Avatar alt="Jackson Beard's Icon" className={classes.authorAvatar} src="/cardProfileImgs/ashrafProfile.jpg"/>
          </Grid>
          <Grid item direction="column">
            <Grid item>
              <Typography className={classes.authorText}>
                Ashraf Moursi
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" className={classes.dateText}>
                June 13, 2020
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body1" className={classes.bodyText}>

            <div style={{textAlign: "center"}}>
              <img src="/blog/pauloAndAshraf.jpg" style={{width: "60%"}}/>
            </div>

            <p>It really is such a strange feeling, even a year to this day after saying goodbye to such a close friend, to be writing something like this. However, in a way, I am finding that it is not difficult for me to put on paper the great memories I have of Paulo. This is because of how strong they are and how important they are personally to me and my life. In fact, I will have to do my best to keep it to a readable length due to just how much I could share. It is easy or desirable for anyone to do, but I find it comforting being able to show in a small way how he truly impacted me and undoubtedly so many others.</p>
            
            <p>It does not need to be said that Paulo was man of conviction. His goals were so clear to himself and others and it was obvious that nothing would deviate him from this path, not even the incredible obstacles that were placed in front of him later on. I really believe that he accomplished much more than your average person could dream of accomplishing in the short amount of time he had on Earth. Not only from a professional standpoint, but also from a personal and social one. What better kind of person to have by your side during such formative, nebulous years such as high school and college than someone who seemingly had everything figured out (he did, of course). While the lot of us were worrying about what we were doing on the weekend, Paulo was putting in long hours at the hobby store, practicing his flying skills with RC planes, or preparing for the next history exam. And that being said, he would still find time to hang out with the guys (including those involved in this very project), and share with us his passion for flying.</p>

            <p>When Paulo invited our group of friends to be passengers on a small 3-seater prop plane with him as the sole pilot, there were certainly mixed feelings among some of us who were more ground-inclined. We all knew his capabilities as a pilot with many hours under his belt already and I know I could not have been more floored by the offer. At the time I was an engineering student, but I had not yet decided on a specific discipline. I was interested in planes and space, so I was thrilled to be able to have this opportunity (if you have never been in a plane like this, it is a vastly different experience to that of a commercial jet). I jumped at the offer and was the first one to show up at the small airfield where Paulo was preparing the aircraft, and I watched him go through the checklist in true awe at his expertise. It was a side of him we of course knew existed, but was so incredible to see in action. It goes without saying that flying is not a cheap endeavor yet Paulo, being the person that we all know him to be, gave us a substantial discount since we would not accept a free ride. I was lucky enough to go up with him twice and both times truly were memories that I will have for the rest of my life; not only because it was so fun for me, but it also unlocked a passion for the aerospace field within me.</p>

            <p>And now, as I type this, I am an aerospace systems engineer supporting the flight and operations of a space telescope and Paulo has been a massive inspiration throughout my pursuit of a master’s degree in aerospace engineering to where I am now. His passion, motivation, hard work, and overall gravitational energy that makes people want to achieve great things will be something I carry with me always, and will be just one of his legacies . I will forever look towards the memory of him for inspiration in all that I want to accomplish in my life, both small and great.</p>

            <Link href="https://www.linkedin.com/pulse/high-flying-inspiration-ashraf-moursi" target="_blank">
              Original LinkedIn post
            </Link>

        </Typography>

    </Container>
    </Layout>
  );
}

HighFlyingInspiration.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(HighFlyingInspiration);
