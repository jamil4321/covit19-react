import React from 'react';
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={styles.title}>
                        Welcome To Covit-19 Tracker App
                    </Typography>
                    <Avatar>J</Avatar>
                    <Typography variant="h6">
                        <a href="https://github.com/jamil4321">Github</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header;