import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TodayIcon from '@material-ui/icons/Today';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';

const useStyles = makeStyles({
  root: {
    height: 245,
  },
});

export default function GiveMoneyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Give Money
          </Typography>
          <List component="nav">

            <ListItem button>
              <ListItemIcon>
                <DoneOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="One time" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Monthly subscription" />
            </ListItem>     

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="YK6G79KLWXUU4" />
              <input style={{width: "100%"}} type="image" src="http://puu.sh/FCwwZ/907740fc50.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>

          </List>
        </CardContent>
    </Card>
  );
}