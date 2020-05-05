import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

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
    },
    successSnackbar: {
        backgroundColor: '#4CAF50'
    },
    errorSnackbar: {
        backgroundColor: '#F44336'
    },
}));

export default function ContactForm(props) {
    const classes = useStyles();
    const { content } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [open, setOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('default_service', 'contact_form', e.target, process.env.EMAILJS_USER_ID)
        .then((result) => {
            setIsSuccess(true);
            setOpen(true);
            resetForm();
        }, (error) => {
            setIsSuccess(false);
            setOpen(true);
        });
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} id="contact-form">
                <Container maxWidth="lg" className={classes.container}>
                    <Paper elevation={2}>
                        <Grid container spacing={2} className={classes.contactFormGrid}>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1" className={classes.contactText}>
                                    Have a question, comment, or concern? Send us a message by filling out this form! Our team will respond back to you within 24hrs of receiving your message!
                                </Typography>
                            </Grid>

                            
                                <Grid item xs={6} direction="column">
                                    <TextField
                                        required
                                        label="First Name"
                                        name="first_nm"
                                        value={firstName}
                                        onChange={(e) => (setFirstName(e.target.value))}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.firstNameInput}
                                    />
                                    <TextField
                                        required
                                        label="Last Name"
                                        name="last_nm"
                                        value={lastName}
                                        onChange={(e) => (setLastName(e.target.value))}
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.lastNameInput}
                                    />
                                    <TextField
                                        required
                                        label="Email"
                                        name="user_email"
                                        value={email}
                                        onChange={(e) => (setEmail(e.target.value))}
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
                                            name="message"
                                            value={message}
                                            onChange={(e) => (setMessage(e.target.value))}
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
                                        type="submit"
                                    >
                                        Send
                                    </Button>
                                </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </form>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                ContentProps={{
                    classes: {
                        root: isSuccess ? classes.successSnackbar : classes.errorSnackbar
                    }
                }}
                autoHideDuration={6000}
                open={open}
                onClose={handleClose}
                message={ isSuccess ? "Message sent!" : "Message was not sent. Please try again."}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </>
    );
}