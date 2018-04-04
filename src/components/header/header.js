import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
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
                {this.items.map((link, index) => {
                    return <RaisedButton className={styles.navBtn}  key={index}><Link to={link.href}>{link.label}</Link></RaisedButton>})
                }
            </AppBar>
        )
    }
}

export default Header;