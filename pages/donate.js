import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { withUserAgent } from 'next-useragent';

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
    padding: theme.spacing(3)
  }
}));

function getContent(donationType, setDonationType, isMobile){
  switch(donationType){
    case "none":
      return(
      <Grid container>
        <Grid item xs={12} style={{textAlign: 'center', marginBottom: '25px'}}>
          <Typography variant="body1">
            Take action!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} style={{textAlign: 'center', paddingBottom: "20px"}}>
              <Button href="https://www.paypal.com/us/fundraiser/charity/4117896" target="_blank">
                <AttachMoneyIcon />
                <Typography variant="button">
                  Make a one time donation
                </Typography>
              </Button>
        </Grid>
        <Grid item xs={12} sm={4} style={{textAlign: 'center', paddingBottom: "20px"}}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="YK6G79KLWXUU4" />
              <Button type="submit">
                <AttachMoneyIcon />
                <Typography variant="button">
                  Make a recurring donation
                </Typography>
              </Button>
            </form>
        </Grid>
        <Grid item xs={12} sm={4} style={{textAlign: 'center'}}>
          <Button size="large" onClick={() => setDonationType("points")}>
            <AirplanemodeActiveOutlinedIcon style={{marginRight: '5px'}}/>
            <Typography variant="button">
              Pledge Points
            </Typography>
          </Button>
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

function donate(props) {
  const classes = useStyles();
  const { ua, useragent } = props;

  const [donationType, setDonationType] = useState("none");

  const isMobile = ua.isMobile;
  
  return (
    <Layout currentPage="Donate" isMobile={isMobile}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Donate
        </Typography>
        
          <Container maxWidth="lg" className={classes.container}>
            <Paper elevation={2} className={classes.paper}>
              {getContent(donationType, setDonationType, isMobile)}
            </Paper>
          </Container>

    </Container>
    </Layout>
  );
}

donate.getInitialProps = async ctx => {
  return { useragent: ctx.ua.source }
}

export default withUserAgent(donate);