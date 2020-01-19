import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>

            <div className={classes.navButtons}>
                <NavLink to="/dialogs/" activeClassName={classes.ButtonActive} className={classes.Button}>Messages</NavLink>
                <NavLink to="/profile" className={classes.Button}>Profile</NavLink>
                <NavLink to="/photo" className={classes.Button}>Photo</NavLink>
                <NavLink to="/news" className={classes.Button}>News</NavLink>
                <NavLink to="/music" className={classes.Button}>Music</NavLink>
                <NavLink to="/friends" className={classes.Button}>Friends</NavLink>

            </div>


        </nav>
    )
};

export default Navbar;
