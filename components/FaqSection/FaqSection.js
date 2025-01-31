import React from 'react';
import { makeStyles } from '@mui/styles';

import { Typography } from '@mui/material';
import { spacing } from '../../components/Layout/theme';

import FaqEntry from './FaqEntry.js';

const useStyles = makeStyles((theme) => ({
    sectionTitle: {
        marginTop: spacing(6),
        marginBottom: spacing(2),
      },
}));

export default function FaqSection(props) {
    const classes = useStyles();
    const {title, entries} = props;

    return (
        <>
            <Typography variant="h5" className={classes.sectionTitle}>
                {title}
            </Typography>
            {entries.map( (entry) => (
                <FaqEntry
                    question={entry.question}
                    answer={entry.answer}
                />
            ))}
        </>
    );
}
