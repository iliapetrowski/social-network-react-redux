import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from '@material-ui/icons/Home';

const Header = (props) => {
    return <header className={styles.header}>
        <NavLink to={'/'}><HomeIcon fontSize='large'/></NavLink>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div><Typography variant="subtitle1" gutterBottom>
                    {props.login}
                </Typography><Button size='small' variant="outlined" onClick={props.logout}>logout</Button></div>
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;