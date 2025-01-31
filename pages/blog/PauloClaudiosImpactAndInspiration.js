import React from 'react';
import { makeStyles } from '@mui/styles';

import { spacing } from '../../components/Layout/theme';
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

function PauloClaudiosImpactAndInspiration(props) {
  const classes = useStyles();

  const { ua, useragent } = props;

  const isMobile = ua.isMobile;
  return (
    <Layout currentPage="" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>

        <Typography variant="h3" className={classes.title}>
          Paulo Claudio's impact and inspiration to myself, and many others
        </Typography>

        <Grid container alignItems="center" className={classes.subtitleContainer}>
          <Grid item>
            <Avatar alt="Jackson Beard's Icon" className={classes.authorAvatar} src="/cardProfileImgs/ianProfile.jpg"/>
          </Grid>
          <Grid item direction="column">
            <Grid item>
              <Typography className={classes.authorText}>
                Ian Stone
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" className={classes.dateText}>
                May 15, 2020
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body1" className={classes.bodyText}>

            <img src="/blog/pauloClaudiosImpactHeader.jpg" style={{width: "100%"}}/>

            <p>
            I wasn’t quite sure how to start my story of Paulo. Considering how many friends and memories he’s made at Pulaski Academy and OSU, it’s hard to limit the number of stories and memories you want to share. I think for now, I’d like to share my personal experiences from when I had first met Paulo and how he’s influenced my life.
            </p>

            <p>
            The first time I heard of Paulo was in the 9th grade. It was about halfway through the first semester of our Freshman Year of Highschool, and our friend group would usually hang out after school for about an hour before we went home. It was either <Link href="https://www.linkedin.com/in/jacksonbeard/?=" target="_blank">Jackson Beard</Link> or <Link href="https://www.linkedin.com/in/dev-nair-230465162/?=" target="_blank">Dev Nair</Link>, but one of them started talking about a new kid named Paulo Claudio. They started mentioning how he had been excelling in all of his classes, achieving grades of 93-94%’s in his courses.
            </p>

            <p>
            I think it’s an accurate statement to say that our friend group has some smart people in it. We have all studied and strived for A’s throughout our courses but hearing Jackson and Dev talk about Paulo made me realize how high the bar could really be set. I quickly took notice of Paulo’s discipline, especially when we had the same classes. I remember when Paulo and I had AP Biology together. We were in the same group and sat next to each other. I remember watching him take notes, keeping up with the lectures each class with complete focus on what the teacher was saying and writing. What really inspired me was how consistent he was. He always brought a positive attitude and he always remained focused throughout each class.
            </p>

            <p>
            What I admired the most after meeting him was how humble and approachable he was. Not once did I ever hear him brag about his test scores or grades. I would always joke with him in our classes about the topic at hand or something completely unrelated. Despite his amazing discipline and focus, he was always willing to joke around with me and have a good laugh or two. That level of discipline and determination really influenced me, especially in College. I put a lot of time into studying throughout college, even attending pointless bonus lectures for points I didn’t really need just because I had the free time. The high bar for excellence Paulo had set in high school stuck with me and drove me to do the best I could, even if I didn’t have to. I remembered how hard he continually pushed himself to achieve his lifelong dream of becoming a pilot. Seeing his hard work pay off really motivated me to do better.
            </p>

            <p>
            During our senior year of college, Paulo informed our friend group that he had been diagnosed with a rare form of cancer. We did our best to keep up with his status and tried to visit him as much as we could while being considerate of his busy treatment and clinic visit schedule. We were positive and supportive throughout his treatment despite the circumstances. We would try and visit him at his home when we were all back home for winter or summer breaks. About a year later, we were informed that Paulo took his final flight to Heaven. When I think back to our visits with Paulo during his treatments, I loved how he was still that same person I could joke around with from high school. I loved how even in the difficult situation that he was in, he was still that same positive, humble, and approachable person I had met all those years ago.
            </p>

            <p>
            The journey that Paulo went through during his fight with cancer had a tremendous influence on my life. It opened up an entirely new perspective for me. Through all of the focus and discipline I had in College, it became easy for me to only think about the task at hand, whether that be an upcoming exam, project, or the massive amounts of stress that came along with it. Once I heard about Paulo and his situation, and once I started putting myself in his shoes it was like a switch had flipped. Exams and projects were still important to me, but their added stress and anxiety seemed to fadeaway. When I would think about Paulo and the situation he was placed in, it made me realize how much more to life there was than feeling the constant worry and stress of an upcoming final or project. I believe that this lesson extends even beyond the classroom, into my new career. After putting in long hours, or getting nowhere on a new project, I reflect back to the experiences I had with Paulo and I quickly realize that life is short. I do believe that you should strive to perform your absolute best in everything you do. But I also believe that in order to get the most out of life like Paulo did, you can’t let that added stress get the best of you.
            </p>

            <p>
            Shortly after Paulo’s final flight, I was happy to hear some of Paulo’s family members reaching out to our close friend group to create a 501(c)(3) Non-profit. This non-profit would use donated cash and points to fund the travel accommodations for cancer patients just like Paulo. The idea behind starting this actually came from Paulo. During Paulo’s treatments he had to travel out of Arkansas to larger cities for better medical treatments. With the help of charities such as <Link href="https://www.angelflight.com/" target="_blank">Angel Flight</Link> and <Link href="http://www.pilotsforchrist.org/" target="_blank">Pilots for Christ</Link>, Paulo was able to attend those treatments and visits. He wanted to start a charity in the hopes that he could help people in similar situations like him. With the help of Paulo’s mother and his close friends <Link href="https://www.linkedin.com/in/ashraf-moursi-a68461119/?=" target="_blank">Ashraf Moursi</Link>, <Link href="https://www.linkedin.com/in/dev-nair-230465162/?=" target="_blank">Dev Nair</Link>, <Link href="https://www.linkedin.com/in/brokanstafford/?=" target="_blank">Brok Stafford</Link>, <Link href="https://www.linkedin.com/in/jacksonbeard/?=" target="_blank">Jackson Beard</Link>, <Link href="https://www.linkedin.com/in/alex-sangster-b49363160/?=" target="_blank">Alex Sangster</Link>, and myself, Paulo’s vision came to life and together we launched the Paulo Claudio Foundation, Paulo’s Points for Life, on May 5th, 2020, a little over a week ago. This would have been Paulo’s 24th birthday, and I’m sure Paulo would have loved to see this charity become a reality to help others in need.
            </p>

            <p>
            When I reflect back on all of the great times I had with Paulo and my friends, it’s hard to believe that I was able to learn and take away so much from someone who was so young. Paulo exhibited characteristics that people strive for their entire lives, and I am still striving to exhibit his humbleness, his determination and discipline, and his positive attitude towards life. I’m sad that I never got to tell Paulo how much he has impacted my life, but I’m just happy we all got to spend our time with him. Paulo truly made the most out of the time he had here, and he’s impacting lives even after his final flight through Paulo’s Points. We would love to help out patients in similar circumstances as Paulo, and if you do too then I ask you to please consider <Link href="/donate">donating to our charity</Link>. I hope my story gave some insight into the kind of person Paulo was, and there are many stories about any number of people’s interactions with Paulo, not just our own. For now, I think this is a great start to achieving something wonderful through Paulo’s Points.
            </p>

            <Link href="https://www.linkedin.com/pulse/paulo-claudios-impact-inspiration-myself-many-others-ian-stone" target="_blank">
              Original LinkedIn post
            </Link>

        </Typography>

    </Container>
    </Layout>
  );
}

PauloClaudiosImpactAndInspiration.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(PauloClaudiosImpactAndInspiration);
