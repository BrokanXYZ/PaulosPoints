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


const theme = createMuiTheme({
  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  palette: {
    primary: {
      main: '#1976d2',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#dc004e',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const headerSections = [
    { title: 'Our Mission', url: '#OurMission' },
    { title: 'Take Action', url: '#TakeAction' },
    { title: 'Our Team', url: '#OurTeam' },
    { title: 'Contact', url: '#Contact' },
  ];

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
    ]
  }

  const contactContent = {

  }

export default function Index() {
    return (
    <>
        <Head>
            <title>Paulo's Points</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="shortcut icon" href="/favicon.png" />
        </Head>

        <CssBaseline />

        <ThemeProvider theme={theme}>
          <Header sections={headerSections} />
          <Container maxWidth="lg">
              <main>
                  <LandingImage content={landingImageContent}/>
                  <OurMission content={ourMissionContent}/>
                  <hr/>
                  <TakeAction content={takeActionContent}/>
                  <hr/>
                  <OurTeam content={ourTeamContent}/>
                  <hr/>
                  <Contact content={contactContent}/>
              </main>
          </Container>
          <Footer />
        </ThemeProvider>
    </>
    );
  }