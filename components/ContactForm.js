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
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(15)
    },
}));

export default function ContactForm(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
        <Paper elevation={3}>
            <Typography>Send us a message!</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        required
                        label="First Name"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        label="Last Name"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Email"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            required
                            label="Message"
                            variant="outlined"
                            multiline
                            rows="15"
                            
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button>Send</Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  );
}