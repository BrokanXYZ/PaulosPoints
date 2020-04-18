import React from 'react';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header.js';
import LandingImage from '../components/LandingImage.js';
import Footer from '../components/Footer.js';
import OurMission from '../components/OurMission.js';
import TakeAction from '../components/TakeAction/TakeAction.js';
import OurTeam from '../components/OurTeam.js';
import Contact from '../components/Contact.js';
import Layout from '../components/Layout.js'


  const landingImageContent = {
    title: 'The Paulo Claudio Foundation',
    image: '/skyBackground.jpeg',
    imgText: 'sky background',
  };

  const ourMissionContent = {
    missionStatement: 'This website was a collaborative effort between several of Paulo’s close friends. You will find information on contributing to Paulo’s Points, frequently asked questions, an application form, and a contact form. We hope that you are able to find everything you need. If you find problems with the site, or would like to provide us with feedback, please reach out to us using the contact us form. Thank you!',
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
        linkedIn: '',        
      },
      {
        name: 'Jackson Beard',
        role: 'Web Developer',
        image: '/cardProfileImgs/jacksonProfile.jpg',
        linkedIn: '',        
      },
      {
        name: 'Ashraf Moursi',
        role: 'Web Developer',
        image: '/cardProfileImgs/ashrafProfile.jpg',
        linkedIn: '',        
      },
      {
        name: 'Dev Nair',
        role: 'Web Developer',
        image: '/cardProfileImgs/devProfile.jpg',
        linkedIn: '',        
      },
      {
        name: 'Ian Stone',
        role: 'Web Developer',
        image: '/cardProfileImgs/ianProfile.jpg',
        linkedIn: '',        
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
        <hr/>
        <TakeAction content={takeActionContent}/>
        <hr/>
        <OurTeam content={ourTeamContent}/>
        <hr/>
        <Contact content={contactContent}/>
      </Layout>    
    );
  }