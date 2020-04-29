import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
  listButton: {
    width: "100%",
    justifyContent: "left",
    textTransform: 'none',
  },
  buttonIcon: {
    marginRight: "25px"
  }
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
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="YK6G79KLWXUU4" />
              <Button type="submit" className={classes.listButton}>
                <AttachMoneyIcon className={classes.buttonIcon}/>
                <Typography variant="body1">
                  PayPal
                </Typography>
              </Button>
            </form>
          </List>
        </CardContent>
    </Card>
  );
}