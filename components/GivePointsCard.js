import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


import ApartmentIcon from '@material-ui/icons/Apartment';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
});

export default function GivePointsCard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState("Airline");

  const handleClickOpen = (dialogType) => {
    setDialogType(dialogType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Give Points
            </Typography>
            
            <List component="nav">

              <ListItem button onClick={() => handleClickOpen("Airline")}>
                <ListItemIcon>
                  <AirplanemodeActiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Airline" />
              </ListItem>

              <ListItem button onClick={() => handleClickOpen("Hotel")}>
                <ListItemIcon>
                  <ApartmentIcon />
                </ListItemIcon>
                <ListItemText primary="Hotel" />
              </ListItem>
              
            </List>

          </CardContent>
      </Card>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogType == "Airline" ? "Our Airline Rewards Accounts" : "Our Hotel Rewards Accounts"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogType == "Airline" ?
              <>
               
              </>
              :
              <>
                
              </>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}