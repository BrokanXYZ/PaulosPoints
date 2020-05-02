import React from 'react';

import Divider from '@material-ui/core/Divider';

import OurMission from '../components/OurMission.js';
import AboutUs from '../components/AboutUs.js';
import TakeAction from '../components/TakeAction/TakeAction.js';
import OurTeam from '../components/OurTeam.js';
import Layout from '../components/Layout/Layout.js'


  const ourMissionContent = {
    missionStatement: 'Paulo’s Points is a non-profit organization whose mission is to use generous donations of frequent flier miles and points for the transportation and housing needs of patients with life threatening medical conditions.',
  }

  const aboutUsContent = {
    bodyText: 'This organization was formed in honor of Paulo Claudio who is a true friend to all who knew him, and passed away far too early due to complications from cancer. He was an avid student and instructor of aviation and his passion for flying inspired so many to pursue their own dreams. For this reason, his friends and family have come together to form the Paulo Claudio Foundation with the goal of reaching out to those in need of medical treatment travel, as Paulo and his family had to endure many times. We hope to give some relief and peace of mind to those in similar situations through cash and airline miles donations, potentially allowing greater access to treatment that would not otherwise be an option.'
  }
  
  const takeActionContent = {
    callToAction1Title: 'Apply',
    callToAction1Body: 'In need of housing or transportation for treatment of a life threatening medical condition? Find out more about how Paulo’s Points can help you here.',
    callToAction1ButtonText: 'Learn more',
    callToAction2Title: 'Donate',
    callToAction2Body: 'Make a one time or recurring donation to the Paulo’s Points foundation here.',
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
        gitHub: 'https://github.com/BrokanXYZ',       
      },
      {
        name: 'Alex Sangster',
        role: '',
        image: '/cardProfileImgs/alexProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/alex-sangster-b49363160/',
        gitHub: '', 
      },
      {
        name: 'Jackson Beard',
        role: '',
        image: '/cardProfileImgs/jacksonProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/jacksonbeard/',
        gitHub: '',
      },
      {
        name: 'Ashraf Moursi',
        role: '',
        image: '/cardProfileImgs/ashrafProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ashraf-moursi-a68461119/',
        gitHub: '',      
      },
      {
        name: 'Dev Nair',
        role: '',
        image: '/cardProfileImgs/devProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/dev-nair-230465162/',
        gitHub: '',   
      },
      {
        name: 'Ian Stone',
        role: '',
        image: '/cardProfileImgs/ianProfile.jpg',
        linkedIn: 'https://www.linkedin.com/in/ian-stone-b285b7105/',
        gitHub: '',   
      },
    ]
  }

export default function Index() {

    return (
      <Layout currentPage="Home">
        <OurMission content={ourMissionContent}/>
        <Divider variant="middle" />
        <AboutUs content={aboutUsContent}/>
        <Divider variant="middle" />
        <TakeAction content={takeActionContent}/>
        <Divider variant="middle" />
        <OurTeam content={ourTeamContent}/>
      </Layout>
    );
  }