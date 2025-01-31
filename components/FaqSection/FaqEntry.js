import React from 'react';

import ExpansionPanel from '@mui/material/ExpansionPanel';
import ExpansionPanelSummary from '@mui/material/ExpansionPanelSummary';
import ExpansionPanelDetails from '@mui/material/ExpansionPanelDetails';
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
    <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography variant="subtitle1">
                {question}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.answerText}>
            {answer}
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
}
