import React from 'react';

import axios from 'axios';

import { withUserAgent } from 'next-useragent';

import Divider from '@material-ui/core/Divider';

import OurMission from '../components/OurMission.js';
import AboutUs from '../components/AboutUs.js';
import TakeAction from '../components/TakeAction/TakeAction.js';
import OurTeam from '../components/OurTeam.js';
import Layout from '../components/Layout/Layout.js'
import BlogHome from '../components/BlogHome/BlogHome.js';
import Partners from '../components/Partners/Partners.js';
import Impact from '../components/Impact/Impact.js';


  const ourMissionContent = {
    missionStatement: 'Paulo’s Points is a non-profit organization whose mission is to use generous donations of frequent flier miles, loyalty points, and money for the transportation and lodging needs of cancer patients during treatment.',
  }
  
  const takeActionContent = {
    callToAction1Title: 'Apply',
    callToAction1Body: 'Are you a cancer patient in need of housing or transportation support? Click the button below to follow our application process!',
    callToAction2Title: 'Donate',
    callToAction2Body: 'Want to donate airline miles, hotel points, or money to our cause? Click below to make a one time or recurring donation to the Paulo’s Points foundation.',
  }

  const ourTeamContent = {
    bodyText: 'This website was a collaborative effort between several of Paulo’s close friends. You will find information on contributing to Paulo’s Points, frequently asked questions, an application form, and a contact form. We hope that you are able to find everything you need. If you find problems with the site, or would like to provide us with feedback, please reach out to us using the contact us form. Thank you!',
    profiles: [
      {
        name: 'Lorna Claudio',
        role: 'Project Organizer',
        image: '/cardProfileImgs/mariaProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/lorna-claudio-877053aa/',
        gitHub: ''
      },
      {
        name: 'Brok Stafford',
        role: 'Web Developer',
        image: '/cardProfileImgs/brokProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/brokanstafford/',
        gitHub: 'https://github.com/BrokanXYZ',       
      },
      {
        name: 'Alex Sangster',
        role: 
          <>
            Response Team,<br/>
            Cybersecurity,<br/>
            Web Dev Support
          </>,
        image: '/cardProfileImgs/alexProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/alex-sangster-b49363160/',
        gitHub: '', 
      },
      {
        name: 'Jackson Beard',
        role: 
          <>
            Response Team,<br/>
            Cybersecurity,<br/>
            Web Dev Support
          </>,
        image: '/cardProfileImgs/jacksonProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/jacksonbeard/',
        gitHub: '',
      },
      {
        name: 'Ian Stone',
        role: 'Response Team',
        image: '/cardProfileImgs/ianProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ian-stone-b285b7105/',
        gitHub: '',   
      },
      {
        name: 'Ashraf Moursi',
        role: 'Social Media',
        image: '/cardProfileImgs/ashrafProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ashraf-moursi-a68461119/',
        gitHub: '',      
      },
      {
        name: 'Dev Nair',
        role: 'Outreach',
        image: '/cardProfileImgs/devProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/dev-nair-230465162/',
        gitHub: '',   
      },
    ]
  }

function Index(props) {

  const { useragent, blogPosts } = props;

  const isMobile = useragent.isMobile;

  return (
    <Layout currentPage="Home" isMobile={isMobile}>
      <OurMission content={ourMissionContent} isMobile={isMobile}/>
      <Divider variant="middle" />
      <TakeAction content={takeActionContent}/>
      <Divider variant="middle" />
      <AboutUs />
      <Divider variant="middle" />
      <BlogHome blogPosts={blogPosts} />
      <Divider variant="middle" />
      <Impact />
      <Divider variant="middle" />
      <OurTeam content={ourTeamContent}/>
      <Divider variant="middle" />
      <Partners />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const res = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paulospoints');
  const blogPosts = await res.data.items;

  return { useragent: ctx.ua, blogPosts: blogPosts}
}

export default withUserAgent(Index);
