import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
}));

export default function FaqEntry(props) {
    const classes = useStyles();
    const {content} = props;

    return (
    <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography className={classes.heading}>
                {content.question}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                {content.answer}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    );
}
