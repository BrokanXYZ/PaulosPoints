import React from 'react';
import { spacing } from '../components/Layout/theme';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: spacing(10),
    marginBottom: spacing(10),
  },
  title: {
    marginBottom: spacing(4),
  },
  bodyTextContainer: {
    textAlign: 'left'
  },
}));

export default function AboutUs(props) {
  const classes = useStyles();

  const paragraphOne = "Paulo’s Points was formed in honor of Paulo Claudio, who was a true friend to all who knew him. He was an avid student and instructor of aviation, and his passion for flying inspired so many to pursue their own dreams. Paulo was diagnosed with cancer two months before his 22nd birthday and college graduation. His condition was so rare that he had to travel out of state to receive specialized treatment. Thankfully, Pilots for Christ and Angels Flight, nonprofits where pilots use their own time and airplanes to transport cancer patients, provided transportation for Paulo. He was moved by this and wished to provide a similar service for people when he recovered.";
  const paragraphTwo = "For this reason, several of his close friends and family came together to form the Paulo Claudio Foundation, AKA Paulo’s Points, with the goal of assisting those in need of travel and housing for cancer treatment. Paulo took his final flight to Heaven shortly after his 23rd birthday, but through this foundation, we hope to continue his dream of flying people around the world. Together, we can provide peace of mind to those in similar situations through cash and airline miles donations, potentially allowing greater access to treatment that would not otherwise be an option.";
  
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" id="AboutUs" className={classes.title}>About Us</Typography>
      <Container maxWidth="md" className={classes.bodyTextContainer}>
        <Typography variant="body1" >
          {paragraphOne}
        </Typography>
        <Typography variant="body1" style={{marginTop: "15px"}} >
          {paragraphTwo}
        </Typography>
      </Container>
    </Container>
  );
}