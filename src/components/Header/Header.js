import React, { Component } from 'react'
import logo from '../../assets/img/logo.png';
import Menu from '../Menu/Menu.js';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Header
