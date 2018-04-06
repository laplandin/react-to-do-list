import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import styles from './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <AppBar>
                <div className={styles.navWrapper}>
                    {this.items.map((link, index) => {
                        return <Button variant="raised" color="default" className={styles.navBtn}  key={index}><Link to={link.href}>{link.label}</Link></Button>})
                    }
                </div>
            </AppBar>
        )
    }
}

export default Header;