import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    answerText: {
      fontStyle: 'italic'
    },
  }));

export default function FaqEntry(props) {
    const classes = useStyles();
    const {question, answer} = props;

    return (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography variant="subtitle1">
                {question}
            </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.answerText}>
            {answer}
        </AccordionDetails>
    </Accordion>
    );
}
