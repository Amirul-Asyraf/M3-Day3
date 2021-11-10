import React from 'react';
import logo from '../../logo.svg';
import classes from './header.module.css';

class Header extends React.Component {
    render () {
        return (
            <div className={classes.logo}>
                <h1>CarSikit</h1>
            </div>
        );
    }
}

export default Header;