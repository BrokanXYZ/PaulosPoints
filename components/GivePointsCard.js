import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ApartmentIcon from '@material-ui/icons/Apartment';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
  root: {
    height: 245,
  },
});

export default function GivePointsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Give Points
          </Typography>
          
          <List component="nav">

            <ListItem button>
              <ListItemIcon>
                <AirplanemodeActiveOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Airline" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="Hotel" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary="Credit card" />
            </ListItem>
            
          </List>

        </CardContent>
    </Card>
  );
}