import React from 'react';

import Divider from '@material-ui/core/Divider';

import LandingImage from '../components/LandingImage.js';
import OurMission from '../components/OurMission.js';
import TakeAction from '../components/TakeAction/TakeAction.js';
import OurTeam from '../components/OurTeam.js';
import Contact from '../components/Contact.js';
import Layout from '../components/Layout/Layout.js'


  const landingImageContent = {
    title: 'The Paulo Claudio Foundation',
    image: '/skyBackground.jpeg',
    imgText: 'sky background',
  };

  const ourMissionContent = {
    missionStatement: 'Paulo’s Points is a non-profit organization whose mission is to use generous donations of frequent flier miles and money to give families access to flights that are often necessary for those afflicted with serious medical needs.',
  }

  const takeActionContent = {
    callToAction1Title: 'Apply',
    callToAction1Body: 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
    callToAction1ButtonText: 'Learn more',
    callToAction2Title: 'Donate',
    callToAction2Body: 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
    callToAction2ButtonText: 'Learn more',
  }

  const ourTeamContent = {
    bodyText: 'This website was a collaborative effort between several of Paulo’s close friends. You will find information on contributing to Paulo’s Points, frequently asked questions, an application form, and a contact form. We hope that you are able to find everything you need. If you find problems with the site, or would like to provide us with feedback, please reach out to us using the contact us form. Thank you!',
    profiles: [
      {
        name: 'Brok Stafford',
        role: 'Web Developer',
        image: '/cardProfileImgs/brokProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/brokanstafford/',        
      },
      {
        name: 'Alex Sangster',
        role: 'Web Developer',
        image: '/cardProfileImgs/alexProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/alex-sangster-b49363160/',        
      },
      {
        name: 'Jackson Beard',
        role: 'Web Developer',
        image: '/cardProfileImgs/jacksonProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/jacksonbeard/',        
      },
      {
        name: 'Ashraf Moursi',
        role: 'Web Developer',
        image: '/cardProfileImgs/ashrafProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ashraf-moursi-a68461119/',        
      },
      {
        name: 'Dev Nair',
        role: 'Web Developer',
        image: '/cardProfileImgs/devProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/dev-nair-230465162/',        
      },
      {
        name: 'Ian Stone',
        role: 'Web Developer',
        image: '/cardProfileImgs/ianProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ian-stone-b285b7105/',        
      },
    ]
  }

  const contactContent = {

  }

export default function Index() {
    return (
      <Layout>
        <LandingImage content={landingImageContent}/>
        <OurMission content={ourMissionContent}/>
        <Divider variant="middle" />
        <TakeAction content={takeActionContent}/>
        <Divider variant="middle" />
        <OurTeam content={ourTeamContent}/>
        <Divider variant="middle" />
        <Contact content={contactContent}/>
      </Layout>    
    );
  }