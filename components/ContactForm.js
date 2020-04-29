import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10)
    },
    contactFormGrid:{
        padding: '15px'
    },
    inputPadding:{
        marginBottom: theme.spacing(3)
    }
}));

export default function ContactForm(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
        <Paper elevation={2}>
            <Grid container spacing={2} className={classes.contactFormGrid}>
                <Grid item xs={6}>
                    <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        color="secondary"
                        className={classes.inputPadding}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        className={classes.inputPadding}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            required
                            label="Message"
                            variant="filled"
                            multiline
                            rows="15"
                            color="secondary"
                            className={classes.inputPadding}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  );
}