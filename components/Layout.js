import React from 'react';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

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
    { title: 'Home', url: '/index' },
    { title: 'Apply', url: '/apply' },
    { title: 'Donate', url: '/donate' },
    { title: 'Blog', url: '/blog' },
    { title: 'FAQ', url: '/FAQ' },
];

export default function Layout(props){
    return(
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
                        {props.children}
                    </main>
                </Container>
                <Footer />
            </ThemeProvider>
        </>
    );
};

