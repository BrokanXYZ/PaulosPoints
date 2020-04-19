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

          </List>
        </CardContent>
    </Card>
  );
}