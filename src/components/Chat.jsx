import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Chat =()=>{
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <div clsssName = "p-chat__bubble"></div>
    </ListItem>
}

export default Chat