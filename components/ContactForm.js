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
    firstNameInput:{
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    lastNameInput: {
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    emailInput: {
        width: '100%',
        marginBottom: theme.spacing(3)
    },
    contactText: {
        fontSize: "18px",
        padding: theme.spacing(3)
    },
    messageInput: {
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
                    <Typography variant="body1" className={classes.contactText}>
                        Have a question, comment, or concern? Send us a message by filling out this form! Our team will respond back to you within 24hrs of receiving your message!
                    </Typography>
                </Grid>

                <Grid item xs={6} direction="column">
                    <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        color="secondary"
                        className={classes.firstNameInput}
                    />
                    <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        color="secondary"
                        className={classes.lastNameInput}
                    />
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        className={classes.emailInput}
                    />
                </Grid>
                    
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            label="Message"
                            variant="filled"
                            multiline
                            rows="10"
                            color="secondary"
                            className={classes.messageInput}
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