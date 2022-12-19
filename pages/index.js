import React, { useEffect, useState } from 'react';

import axios from 'axios';
import parse from 'rss-to-json';

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
    bodyText: "Paulo's Points is a collaborative effort between Paulo's close friends and family. None of us receive compensation for the work we do. All donations go directly towards helping cancer patients.",
    profiles: [
      {
        name: 'Lorna Claudio',
        role: 'Project Organizer',
        image: '/cardProfileImgs/mariaProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/lorna-claudio-877053aa/'
      },
      {
        name: 'Brok Stafford',
        role: 'Web Developer',
        image: '/cardProfileImgs/brokProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/brokanstafford/'
      },
      {
        name: 'Alex Sangster',
        role: "Response Team",
        image: '/cardProfileImgs/alexProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/alex-sangster-b49363160/'
      },
      {
        name: 'Jackson Beard',
        role: "Response Team",
        image: '/cardProfileImgs/jacksonProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/jacksonbeard/'
      },
      {
        name: 'Ian Stone',
        role: 'Response Team',
        image: '/cardProfileImgs/ianProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ian-stone-b285b7105/'
      },
      {
        name: 'Ashraf Moursi',
        role: 'Social Media',
        image: '/cardProfileImgs/ashrafProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ashraf-moursi-a68461119/'    
      },
      {
        name: 'Dev Nair',
        role: 'Outreach',
        image: '/cardProfileImgs/devProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/dev-nair-230465162/'
      },
      {
        name: 'Jenneen Elkhalid',
        role: 'Outreach',
        image: '/cardProfileImgs/jenneenProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/jenneen-elkhalid-896985148/'
      }
    ]
  }

  const ourImpactContent = {
    bodyText: "We assist cancer patients with transportation and lodging costs all over the United States! We cover both air and ground transportation fees." 
  }

function Index(props) {

  const { blogPosts } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    setIsMobile(window.navigator.userAgentData.mobile);
  }, [])

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
      <Impact content={ourImpactContent} />
      <Divider variant="middle" />
      <OurTeam content={ourTeamContent}/>
      <Divider variant="middle" />
      <Partners />
    </Layout>
  );
}

export async function getServerSideProps() {
  let mediumRssResponse = await parse(`https://medium.com/feed/@paulospoints`)
  let blogPosts = mediumRssResponse.items
  return { props: JSON.parse(JSON.stringify({ blogPosts })) }
}


export default withUserAgent(Index);
