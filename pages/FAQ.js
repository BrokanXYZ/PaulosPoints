import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

import FaqEntry from '../components/FaqEntry.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15)
},
}));

const faqEntries = [
  {
    question: "Who is qualified for assistance?",
    answer: "...Cancer patients who is financially challenged and has to travel far for treatments."
  },
  {
    question: "Do you pay for air ambulance?",
    answer: "***Currently we can only assist you for regular commercial airlines."
  },
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
  {
    question: "???",
    answer: "So I spoke with some people from the tax department at my firm about the tax treatment of donating airline miles. Basically airline miles donated to a charity are not deductible by the individual person. The IRS only sees it as a gift coming from the organization to the charity. We looked up Red Cross’ website as a source of how they handle this exact thing. The tax manager did mention another charity in Denver that handles contributions of Grants that might have a better tax treatment, so I have some contact info for them if we decide to go that way but as for airline miles the individual can’t deduct that gift"
  },
];

export default function FAQ() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" >FAQ</Typography>
        <div className={classes.root}>
            {faqEntries.map( (entry) => (
              <FaqEntry content={entry}/>
            ))}
        </div>
    </Container>
  );
}
