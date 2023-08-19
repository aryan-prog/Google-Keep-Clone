import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import { Link } from 'react-router-dom';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';


function NavList(open) {
    
    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    ]
  return (
    <div>
      <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                </ListItem>
            ))}
      </List>
    </div>
  );
}

export default NavList;
