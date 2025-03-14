import React from 'react';
import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../Header.js';
import Footer from '../Footer.js';
import theme from './theme.js';
  
const headerSections = [
    { title: 'Home', url: '/' },
    { title: 'Apply', url: '/apply' },
    { title: 'Donate', url: '/donate' },
    { title: 'Blog', url: '/blog' },
    { title: 'FAQ', url: '/FAQ' },
    { title: 'Contact', url: '/contact'}
];

export default function Layout(props){
    const { currentPage, isMobile } = props;

    return(
        <>
            <Head>
                <title>Paulo's Points</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <CssBaseline />

            <ThemeProvider theme={theme}>
                <Header sections={headerSections} currentPage={currentPage} isMobile={isMobile}/>
                <Container maxWidth="lg">
                    <main>
                        {props.children}
                    </main>
                    <Divider variant="middle" />
                    <Footer />
                </Container>
            </ThemeProvider>
        </>
    );
};

