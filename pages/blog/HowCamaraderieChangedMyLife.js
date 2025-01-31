import React from 'react';
import { makeStyles } from '@mui/styles';

import { spacing } from '../components/Layout/theme';

import { withUserAgent } from 'next-useragent';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Layout from '../../components/Layout/Layout.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(4),
    marginBottom: spacing(15)
  },
  title: {
    marginBottom: spacing(1)
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
    width: spacing(6),
    height: spacing(6),
    marginRight: spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  subtitleContainer: {
    marginBottom: spacing(4)
  }
}));

function HowCamaraderieChangedMyLife(props) {
  const classes = useStyles();

  const { ua, useragent } = props;

  const isMobile = ua.isMobile;
  return (
    <Layout currentPage="" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>

        <Typography variant="h3" className={classes.title}>
          How Camaraderie Changed my Life and How You Can Change Lives Too
        </Typography>

        <Grid container alignItems="center" className={classes.subtitleContainer}>
          <Grid item>
            <Avatar alt="Jackson Beard's Icon" className={classes.authorAvatar} src="/cardProfileImgs/jacksonProfile.jpg"/>
          </Grid>
          <Grid item direction="column">
            <Grid item>
              <Typography className={classes.authorText}>
                Jackson Beard
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" className={classes.dateText}>
                May 8, 2020
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body1" className={classes.bodyText}>

            <img src="/blog/groupPic.png" style={{width: "100%"}}/>

            <p>
            Hello There,
            </p>

            <p>
            I do not normally post on LinkedIn, but this is an exception. Paulo was an exception too. This is a story about Paulo Claudio, a longtime friend who inspired countless people in pursuit of his dreams of flight.
            </p>

            <p>
            During the first week of ninth grade in my Chinese class, we had to introduce ourselves. The instructor, Mr. Chen, went around the room and requested us to tell everyone what our name was, what school we were from, one of our hobbies, and why we decided to take Chinese. Since we were seated in alphabetical order by last name, I was one of the first people to go, and right behind me was someone named Paulo. I do not remember what I said my hobby was or what I said for why I took Chinese class; probably something about video games and wanting to take a language class that was not Spanish for once. What I do remember is what Paulo said. Paulo said his hobby was flying RC planes and that he took Chinese class because it would be valuable for flights to China when he becomes a commercial airline pilot. It was very clear to me at that point that he did not just have some vague idea of what he wanted to do- he had his whole career mapped out already and it was only the first week of ninth grade. I mean this kid really knew exactly what he wanted to do. In fact, I cannot remember a time when Paulo did not mention becoming a pilot while introducing himself after many years of class introductions with him.
            </p>

            <p>
            Over time, we became great friends through our shared passion for excellence, achievement, and video games. Initially, I was not very driven to achieve and excel, but over time Paulo’s dedication to being the best he could grew on me. He knew he wanted to be the top of the class in everything, not just topics which mattered for his career in aviation. Eventually, we were competing on exam and project scores for every class we took together. We would trade blows on scores and continually challenged each other to be the best we could. When possible we worked together because we knew we both had the same drive to achieve and could rely on each other to put our best effort into anything we worked on. We worked on countless projects, tackled endless challenging assignments, and actually had some fun times together as well.
            </p>

            <p>
            We both continued to take Chinese for all four years of high school, and each year Paulo and I won what we called “medals” in Chinese for being at the top of the class for a given course. Eventually, when we graduated we were both in the top 10%, and Paulo was Salutatorian. At this point, our paths diverged and Paulo went off to Oklahoma State University to obtain his flight degree and a pilot’s license while I went off to Purdue to study computers.
            </p>

            <p>
            About 4 years later, Paulo informed several of his close friends that he had been diagnosed with a rare form of lung cancer. We did our best to support Paulo through the many challenges that treatment poses. It was a difficult time for all of us- we were not always aware of his status, but strived to remain positive and support him along the way. A little over a year after we were told of the diagnosis, we were dismayed to hear that Paulo had taken his final flight to heaven. Of course, we grieved, but I think many of us shared the same sentiment that I felt- that he would always live on in our thoughts and memories.
            </p>

            <p>
            One thing did not change though were the friends we made along the way. When we returned from school for winter and summer break, we would all hang out and catch up. Usually we played games, got dinner, watched movies, and played sports together. Many of the “regular crew” members are pictured in the header photo for this article. We still hang out today when everyone is around, and usually we spend a lot of that time reminiscing about the incredible escapades we embarked on with Paulo and others many years ago.
            </p>

            <p>
            Why did I just recount this whole story? Well, several months later, some of those same close friends and some of his family members came together to create a 501c3 nonprofit known as the Paulo Claudio Foundation, or Paulo’s Points, with the goal of providing air travel and accommodations for cancer treatment. While Paulo was undergoing treatment, he received transportation from <Link href="http://www.pilotsforchrist.org/" target="_blank">Pilots for Christ</Link> and <Link href="https://www.angelflight.com/" target="_blank">Angel Flight</Link>, non-profits where pilots use their own time and airplanes to transport cancer patients. Paulo was inspired by this. He informed his family that he wanted to do something similar once his treatment had concluded, and through this non-profit, we hope to not only provide transportation for cancer patients in need like Paulo wanted, but also continue Paulo’s dream of flying people around the world. Through several months of business planning and website development, our vision for the non-profit finally became a reality. On Tuesday of this week, we celebrated what would have been Paulo’s 24th birthday with the launch of Paulo’s Points.
            </p>

            <p>
            I am certain that Paulo was an inspiration and a great friend for dozens of people just as he was for me. The story I wrote just scrapes the surface of how inspirational he was and how enthusiastic he was about flight and life in general. I could write dozens of pages on my interactions with Paulo, and I am sure many others can as well. If you have stories, I encourage you to share your own inspirational or even funny stories of him using #StoriesOfPaulo.
            </p>

            <p>
            I wrote this story in the hope that it not only appeals to those of you who knew Paulo and I back then, but also to those of you who did not, and if nothing else, I hope it acts as a testament to the power of lifelong friendships. I know times are tough right now, but if you were moved by my story and would like to help us achieve our mission, please consider <Link href="https://paulospoints.org/donate">donating to the foundation</Link>. With a donation, you can help us change lives for cancer patients just as Paulo had done for so many others. I also want to give a special shout out to my longtime friends <Link href="https://www.linkedin.com/in/brokanstafford/" target="_blank">Brok Stafford</Link>, <Link href="https://www.linkedin.com/in/alex-sangster-b49363160/" target="_blank">Alex Sangster</Link>, <Link href="https://www.linkedin.com/in/ian-stone-b285b7105/" target="_blank">Ian Stone</Link>, <Link href="https://www.linkedin.com/in/ashraf-moursi-a68461119/" target="_blank">Ashraf Moursi</Link>, and <Link href="https://www.linkedin.com/in/dev-nair-230465162/" target="_blank">Dev Nair</Link> for their work on this. Without their efforts, none of this would have been possible and I am glad I was able to assist with the development of Paulo’s Points. I am looking forward to what we will achieve!
            </p>

            <Link href="https://www.linkedin.com/pulse/how-camaraderie-changed-my-life-you-can-change-lives-too-beard/?trackingId=acCi46VmSnywLJvPmQt9pw%3D%3D" target="_blank">
              Original LinkedIn post
            </Link>

        </Typography>

    </Container>
    </Layout>
  );
}

HowCamaraderieChangedMyLife.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(HowCamaraderieChangedMyLife);
