import React from 'react';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from '../components/Header.js';
import LandingImage from '../components/LandingImage.js';
import Footer from '../components/Footer.js';


const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];


  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

export default function Index() {
    return (
    <>
        <Head>
            <title>Paulos Points</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>

        <CssBaseline />

        <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <main>
                <LandingImage post={mainFeaturedPost}/>
                does this work?
            </main>
        </Container>

        <Footer />
    </>
    );
  }