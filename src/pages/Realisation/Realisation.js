import React, { Component } from 'react';
import './Realisation.scss';

import items from '../../components/Portfolio/items.js';

//Attention on est bien dans la présentation singulière
export class Realisation extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            items: items
        }
        //Yes, et là donc un petit filter map et le tour est joué... 
        //Putain c'est quand même bien.
    }

    componentDidMount() {
        //Pour aller en haut de la page dès qu'on arrive sur celle-ci
        //document.querySelector('html').style.scrollBehavior = 'none';
        window.scrollTo(0, 0);
        //document.querySelector('html').style.scrollBehavior = 'smooth';
    }

    render() {
        
        let paramId = this.props.match.params.id;
        let items = this.state.items.filter(item => item.id == paramId);
        let item = items[0];
        
        return (
            <div id="Realisation">
                <div className="container">
                    <h1 className="title">{item.name}</h1>
            
                    <div className="iframe-container">
                        <iframe 
                            src={`https://player.vimeo.com/video/${item.link_id}`} 
                            width="100%" 
                            height="480px" 
                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>

                    <div className="content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id expedita dignissimos alias, illo praesentium ipsa eaque tempora libero laborum! Nihil placeat quia fugit minima officia eaque amet est, sit et?
                    </div>

                </div>
            </div>
        )
    }
}

export default Realisation
