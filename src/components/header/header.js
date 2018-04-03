import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return <header>{this.items.map((link, index) => <Link to={link.href} key={index}>{link.label}</Link>)}</header>;
    }
}

export default Header;