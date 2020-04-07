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

const sections = [
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
          <Header title="Blog" sections={sections} />
          <Container maxWidth="lg">
              <main>
                  <LandingImage content={landingImageContent}/>
                  <OurMission />
                  <hr/>
                  <TakeAction />
                  <hr/>
                  <OurTeam />
                  <hr/>
                  <Contact />
              </main>
          </Container>
          <Footer />
        </ThemeProvider>
    </>
    );
  }