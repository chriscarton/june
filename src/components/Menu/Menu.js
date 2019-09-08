import React, { Component } from 'react';
import './Menu.scss';

import menu from '../../assets/img/menu.png';

export class Menu extends Component {
    render() {
        return (
        <div id="menuTrigger">
            <img src={menu} alt="Icône du menu"/>
        </div>
        )
    }
}

export default Menu
