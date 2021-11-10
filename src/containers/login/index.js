import React from 'react';
import classes from './login.module.css';

import { Link } from 'react-router-dom';

class Login extends React.Component {
    render () {
        return (
            <div className={classes.container}>
                <div className={classes.login_holder}>
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button>
                        <Link to='/dashboard'>Login</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;