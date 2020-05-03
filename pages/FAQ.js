import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

import FaqSection from '../components/FaqSection/FaqSection.js';
import Layout from '../components/Layout/Layout.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
  },
}));

const faqSections = [
  {
    title: "Assistance",
    entries: [
      {
        question: "Who is qualified for assistance?",
        answer: 
          <Typography variant="body2">
            Cancer patients who are financially challenged and have to travel to other cities for the necessary treatments.
          </Typography>
      },
      {
        question: "Does your organization pay for Air Ambulance Services?",
        answer: 
          <Typography variant="body2">
            Currently, our organization can assist you for the following regular commercial airlines:
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="United Airlines" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Southwest Airlines" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="American Airlines" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Delta Airlines" />
              </ListItem>
            </List>
          </Typography>
      },
      {
        question: "What hotels can your organization assist with?",
        answer: 
          <Typography variant="body2">
            We can currently provide support with the following hotels:
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Marriott" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Holiday Inn" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Comfort Inn" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Best Western" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Wyndham" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Hilton" />
            </ListItem>
          </List>
        </Typography>
      }
    ]
  },
  {
    title: "Donation",
    entries: [
      {
        question: "How can we donate points from airlines and Hotels?",
        answer: 
          <Typography variant="body2">
            We are currently working on fleshing out this process. At the moment we are collecting information on willing donors. Please fill out the form on our <Link href="/donate" color="secondary">donate page</Link> if you want to donate airline or hotel points.
          </Typography>
      },
      {
        question: "Is it possible to just donate money?",
        answer: 
          <Typography variant="body2">
            Yes! We will use the money to buy airline tickets, hotel lodging, as well as ground transportation for patients.
          </Typography>
      },
      {
        question: "How can we donate money?",
        answer: 
          <Typography variant="body2">
            You can find that specific donation method <Link href="/donate" color="secondary">here</Link> on our website.
          </Typography>
      },
      {
        question: "Is it possible for my donation to remain anonymous?",
        answer: 
          <Typography variant="body2">
            Yes! When you choose any form of donation method, you will not be required to enter your First or Last Name unless you choose to.
          </Typography>
      },
      {
        question: "Instead of just one donation amount, is it possible to donate a portion monthly / recurring?",
        answer: 
          <Typography variant="body2">
            Yes! If you find you do not wish to donate a larger portion at once, there is the option to donate a monthly amount which would pull from your desired payment method.
          </Typography>
      },
    ]
  },
];

export default function FAQ() {
  const classes = useStyles();

  return (
    <Layout currentPage="FAQ">
      <Container maxWidth="md" className={classes.container}>
          <Typography variant="h3" className={classes.title}>
            FAQ
          </Typography>
          <div className={classes.root}>
              {faqSections.map( (section) => (
                <FaqSection 
                  title={section.title} 
                  entries={section.entries} 
                />
              ))}
          </div>
      </Container>
    </Layout>
  );
}
