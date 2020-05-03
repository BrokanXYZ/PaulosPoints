import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

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
