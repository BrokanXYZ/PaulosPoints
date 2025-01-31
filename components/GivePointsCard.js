import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


import ApartmentIcon from '@mui/icons-material/Apartment';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';

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