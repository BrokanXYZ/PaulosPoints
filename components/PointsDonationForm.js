import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { makeStyles } from '@mui/styles';
import { spacing } from '../components/Layout/theme';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: spacing(10),
        marginBottom: spacing(10)
    },
    contactFormGrid:{
        padding: '15px'
    },
    firstNameInput:{
        width: '100%',
        marginBottom: spacing(3)
    },
    lastNameInput: {
        width: '100%',
        marginBottom: spacing(3)
    },
    emailInput: {
        width: '100%',
        marginBottom: spacing(3)
    },
    contactText: {
        fontSize: "18px",
        padding: spacing(3)
    },
    messageInput: {
        marginBottom: spacing(3)
    },
    successSnackbar: {
        backgroundColor: '#4CAF50'
    },
    errorSnackbar: {
        backgroundColor: '#F44336'
    },
    formControl: {
        marginBottom: spacing(5),
        width: '100%',
    },
}));

export default function PointsDonationForm(props) {
    const classes = useStyles();
    const { setDonationType } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [programType, setProgramType] = useState('');
    const [program, setProgram] = useState('');
    const [pointAmount, setPointAmount] = useState('');


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
    
        emailjs.sendForm('default_service', 'points_donation', e.target, process.env.EMAILJS_USER_ID)
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
        setPhone('');
        setProgramType('');
        setProgram('');
        setPointAmount('');
    };

    const getProgramSelect = () => {
        if(programType === "Airline"){
            return(
                <FormControl className={classes.formControl} required>
                    <InputLabel>Program</InputLabel>
                    <Select
                        name="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        required
                    >
                        <MenuItem value={"United Airlines"}>United Airlines</MenuItem>
                        <MenuItem value={"Southwest Airlines"}>Southwest Airlines</MenuItem>
                        <MenuItem value={"American Airlines"}>American Airlines</MenuItem>
                        <MenuItem value={"Delta Airlines"}>Delta Airlines</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            );
        }else if(programType === "Hotel"){
            return(
                <FormControl className={classes.formControl} required>
                    <InputLabel>Program</InputLabel>
                    <Select
                        name="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        required
                    >
                        <MenuItem value={"Marriott"}>Marriott</MenuItem>
                        <MenuItem value={"Holiday Inn"}>Holiday Inn</MenuItem>
                        <MenuItem value={"Comfort Inn"}>Comfort Inn</MenuItem>
                        <MenuItem value={"Best Western"}>Best Western</MenuItem>
                        <MenuItem value={"Wyndham"}>Wyndham</MenuItem>
                        <MenuItem value={"Hilton"}>Hilton</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            );
        }else{
            return(
                <FormControl className={classes.formControl} required>
                    <InputLabel>Program</InputLabel>
                    <Select
                        name="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                    >
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            );
        }
    };

    return (
        <>
            <IconButton onClick={() => setDonationType("none")}>
                <ArrowBackIcon/>
            </IconButton>
            <form onSubmit={handleSubmit} id="donation-form">
                <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={2} className={classes.contactFormGrid}>
                            
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
                            <TextField
                                required
                                label="Phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => (setPhone(e.target.value))}
                                variant="outlined"
                                color="secondary"
                                className={classes.emailInput}
                            />
                            
                            <FormControl className={classes.formControl} required>
                                <InputLabel>Program Type</InputLabel>
                                <Select
                                    name="program_type"
                                    value={programType}
                                    onChange={(e) => setProgramType(e.target.value)}
                                >
                                    <MenuItem value={"Airline"}>Airline</MenuItem>
                                    <MenuItem value={"Hotel"}>Hotel</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            {getProgramSelect()}

                            <TextField
                                required
                                label="Amount of Points"
                                name="point_amount"
                                value={pointAmount}
                                onChange={(e) => (setPointAmount(e.target.value))}
                                variant="outlined"
                                color="secondary"
                                className={classes.emailInput}
                            />

                            <Grid item>
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                >
                                    Pledge Points
                                </Button>
                            </Grid>
                        </Grid>
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