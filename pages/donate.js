import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import Layout from '../components/Layout/Layout.js';
import PointsDonationForm from '../components/PointsDonationForm.js';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15)
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  paper: {
    //minHeight: '250px',
    padding: theme.spacing(3)
  }
}));

function getContent(donationType, setDonationType){
  switch(donationType){
    case "none":
      return(
      <Grid container>
        <Grid item xs={12} style={{textAlign: 'center', marginBottom: '25px'}}>
          <Typography variant="body1">
            What do you want to donate?
          </Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <Button size="large" onClick={() => setDonationType("points")}>
            <AirplanemodeActiveOutlinedIcon style={{marginRight: '5px'}}/>
            Points
          </Button>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'center'}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="YK6G79KLWXUU4" />
              <Button type="submit">
                <AttachMoneyIcon />
                <Typography variant="body1">
                  Money
                </Typography>
              </Button>
            </form>
        </Grid>
      </Grid>);
    case "points":
      return(<PointsDonationForm setDonationType={setDonationType}/>);
    case "money":
      return(<></>);
    default:
      return(<></>);
  }
}

export default function donate() {
  const classes = useStyles();

  const [donationType, setDonationType] = useState("none");

  return (
    <Layout currentPage="Donate">
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Donate
        </Typography>
        
          <Container maxWidth="lg" className={classes.container}>
            <Paper elevation={2} className={classes.paper}>
              {getContent(donationType, setDonationType)}
            </Paper>
          </Container>

    </Container>
    </Layout>
  );
}