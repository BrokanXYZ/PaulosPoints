import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function FaqEntry(props) {
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
        <ExpansionPanelDetails>
            <Typography variant="body1">
                {answer}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
}
