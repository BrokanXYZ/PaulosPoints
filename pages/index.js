import React from 'react';

import axios from 'axios';

import { withUserAgent } from 'next-useragent';

import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

import OurMission from '../components/OurMission.js';
import AboutUs from '../components/AboutUs.js';
import TakeAction from '../components/TakeAction/TakeAction.js';
import OurTeam from '../components/OurTeam.js';
import Layout from '../components/Layout/Layout.js'
import BlogHome from '../components/BlogHome/BlogHome.js';


  const ourMissionContent = {
    missionStatement: 'Paulo’s Points is a non-profit organization whose mission is to use generous donations of frequent flier miles, loyalty points, and money for the transportation and housing needs of cancer patients during treatment.',
  }

  const aboutUsContent = {
    bodyText: 'Paulo’s Points was formed in honor of Paulo Claudio, who was a true friend to all who knew him. He was an avid student and instructor of aviation, and his passion for flying inspired so many to pursue their own dreams. Paulo was diagnosed with cancer two months before his 22nd birthday and college graduation. His condition was so rare that he had to travel out of state to receive specialized treatment. Thankfully, Pilots for Christ and Angels Flight, nonprofits where pilots use their own time and airplanes to transport cancer patients, provided transportation for Paulo. He was moved by this and wished to provide a similar service for people when he recovered. For this reason, several of his close friends and family came together to form the Paulo Claudio Foundation, AKA Paulo’s Points, with the goal of assisting those in need of travel and housing for cancer treatment. Paulo took his final flight to Heaven shortly after his 23rd birthday, but through this foundation, we hope to continue his dream of flying people around the world. Together, we can provide peace of mind to those in similar situations through cash and airline miles donations, potentially allowing greater access to treatment that would not otherwise be an option.'
  }
  
  const takeActionContent = {
    callToAction1Title: 'Apply',
    callToAction1Body: 'In need of housing or transportation for treatment of a life threatening medical condition? Click the button below to follow our application process!',
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
      <AboutUs content={aboutUsContent}/>
      <Divider variant="middle" />
      <BlogHome blogPosts={blogPosts} />
      <Divider variant="middle" />
      <OurTeam content={ourTeamContent}/>
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const res = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@paulospoints');
  const blogPosts = await res.data.items;

  return { useragent: ctx.ua.source, blogPosts: blogPosts}
}

export default withUserAgent(Index);
