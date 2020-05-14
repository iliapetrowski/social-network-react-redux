/* eslint-disable no-nested-ternary */
import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const Navbar = () => {
    return (
        <div className={styles.nav}>
    <List disablePadding dense>
            <NavLink to="/profile" className={styles.button__text}><ListItem button><ListItemText >Profile</ListItemText></ListItem></NavLink>
            <NavLink to="/users" className={styles.button__text}><ListItem button><ListItemText>Users</ListItemText></ListItem></NavLink>
            <NavLink to="/dialogs" className={styles.button__text}><ListItem button><ListItemText>Messages</ListItemText></ListItem></NavLink>
            <NavLink to="/profile" className={styles.button__text}><ListItem button><ListItemText>News</ListItemText></ListItem></NavLink>
            <NavLink to="/profile" className={styles.button__text}><ListItem button><ListItemText>Films</ListItemText></ListItem></NavLink>
            <NavLink to="/sandbox" className={styles.button__text}><ListItem button><ListItemText>Sandbox</ListItemText></ListItem></NavLink>
    </List>
        </div>
)
}

export default Navbar;