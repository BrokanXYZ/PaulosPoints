import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import FaqSection from '../components/FaqSection.js';
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
        answer: "Cancer patients who are financially challenged and have to travel to other cities for the necessary treatments."
      },
      {
        question: "Does your organization pay for Air Ambulance Services?",
        answer: "Currently, our organization can assist you for the following regular commercial airlines: (Can we get a listing of the airlines we are connected with here)"
      },
    ]
  },
  {
    title: "Donation",
    entries: [
      {
        question: "How can we donate points from airlines and Hotels?",
        answer: "The Foundation has membership accounts set up for most airlines (maybe list these here) and hotels (list these as well). The account/membership numbers are listed on our website (maybe hyperlink the word ‘website’ to redirect to that part of the website if possible) \n You will contact the hotels and airlines yourself in order to transfer / donate your points to The Foundation’s accounts. There could be a small charge amount from the airlines / hotels to process any transfers. Be sure to inquire about this if you call your respective airline / hotel."
      },
      {
        question: "Is it possible to just donate money?",
        answer: "Yes! We will use the money to buy airline tickets, hotel lodging, as well as ground transportation for patients."
      },
      {
        question: "How can we donate money?",
        answer: "You can find that specific donation method ‘here’ on our website. (For this, maybe hyperlink the word ‘here’ to redirect to that part of our website to help out the user if possible)"
      },
      {
        question: "Is it possible for my donation to remain anonymous?",
        answer: "Yes! When you choose any form of donation method, you will not be required to enter your First or Last Name unless you choose to."
      },
      {
        question: "Instead of just one donation amount, is it possible to donate a portion monthly / recurring?",
        answer: "Yes! If you find you do not wish to donate a larger portion at once, there is the option to donate a monthly amount (minimum $5?) which would pull from your desired payment method (maybe their debit / credit card or possibly a checkings / savings account if there is an option to link to their bank accounts with the Account and Routing Numbers. I’m not actually sure if that is a good idea for us to link a donator’s bank account into our website. If not, then we can always just limit their recurring monthly charges to their credit / debit cards since that seems a bit more safe than having someone else’s bank account info on our website.)"
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
