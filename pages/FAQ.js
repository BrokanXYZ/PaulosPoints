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
    marginBottom: theme.spacing(15)
},
}));

const faqSections = [
  {
    title: "Assistance",
    entries: [
      {
        question: "Who is qualified for assistance?",
        answer: "...Cancer patients who is financially challenged and has to travel far for treatments."
      },
      {
        question: "Do you pay for air ambulance?",
        answer: "***Currently we can only assist you for regular commercial airlines."
      },
    ]
  },
  {
    title: "Donation",
    entries: [
      {
        question: "How can we donate points from airlines and Hotels?",
        answer: "The foundation has membership accounts set up for most airlines and hotels. The account/membership numbers are listed in our website. You will contact the hotels and airlines yourself to transfer/ donate points to the Foundation accounts. The airlines or hotels might charge you small amount to process the transfers."
      },
      {
        question: "Can we give money?",
        answer: "Yes. We will use the money to buy airline tickets, hotel lodging and ground transportation."
      },
      {
        question: "how can we give money?",
        answer: "There is (help me on this please) a tab in the. Website where you can ...."
      },
    ]
  },
  {
    title: "Finance",
    entries: [
      {
        question: "???",
        answer: "So I spoke with some people from the tax department at my firm about the tax treatment of donating airline miles. Basically airline miles donated to a charity are not deductible by the individual person. The IRS only sees it as a gift coming from the organization to the charity. We looked up Red Cross’ website as a source of how they handle this exact thing. The tax manager did mention another charity in Denver that handles contributions of Grants that might have a better tax treatment, so I have some contact info for them if we decide to go that way but as for airline miles the individual can’t deduct that gift"
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
