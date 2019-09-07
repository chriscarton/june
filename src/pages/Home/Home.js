import React, { Component } from 'react';

//Hmmm...
//D'ici je dois importer les components de cette page 
//Attention il y a ../components/

import Front from '../../components/Front/Front.js';
import Presentation from '../../components/Presentation/Presentation.js';
import WhatAndForWho from '../../components/WhatAndForWho/WhatAndForWho.js';
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs.js';

export default class Home extends Component {
    componentDidMount() {
        //Pour aller en haut de la page dès qu'on arrive sur celle-ci
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="homePage">
                <Front/>
                <Presentation/>
                <WhatAndForWho/>
                <WorkWithUs/>
            </div>
        )
    }
}
