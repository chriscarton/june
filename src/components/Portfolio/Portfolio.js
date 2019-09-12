import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss';
import SvgArrow from '../SvgArrow/SvgArrow.js';

import camera from '../../assets/img/camera.png';

import items from './items.js';

export class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: items
        }

        //avec la notation que j'utilise je ne sais pas si ceci est nécessaire

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    mouseEnter(target) {
        target.play();
    }

    mouseLeave(target) {
        target.pause();
    }

    hideLoader(target){
        let parent = target.parentNode;
        let loader = parent.querySelector('.loader');
        loader.style.display = 'none';
    }

    handleMouseEnter(target) {
        let grand_parent = target.parentNode.parentNode;

        let svg = grand_parent.querySelector('svg');
        svg.getElementById('arrowLine')
            .beginElement();

        setTimeout('document.getElementById(\'arrowLine\').beginElement()', 150);
    }

    handleClick(target){
        let grand_parent = target.parentNode.parentNode;

        


        let arrowLink = grand_parent.querySelector('.arrow-link');
        arrowLink.click();
    }

    render() {

        //showing == 'brand' || 'event'
        let showing = this.props.showing;
        let items = this.state.items.filter(item => item.cat == showing);

        return (
            <div id="Portfolio">
                <div className="centered">

                    <div className="entries">
                        {items.map((item) =>
                            <div 
                                key={item.id} 
                                className="entry" 
                                onClick={(e)=>this.handleClick(e.target)}
                                onMouseEnter={(e) => this.handleMouseEnter(e.target)}

                                >
                                <div className="media">
                                    <div className="loader">
                                        <img src={camera} alt="Iĉone chargement"/>
                                    </div>
                                    <video
                                        muted loop 
                                        className="media-video"
                                        onMouseEnter={(e) => this.mouseEnter(e.target)}
                                        onMouseLeave={(e) => this.mouseLeave(e.target)}
                                        onLoadedData={(e) => this.hideLoader(e.target)}
                                    >
                                        <source src={item.src} type="video/mp4" />
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                </div>
                                <div className="cartouche">
                                    <h2 className="title">{item.name}</h2>
                                    <div className="infos">
                                        {item.client} <br />
                                        {item.cat}
                                    </div>
                                    <div className="arrow-icon">
                                        <Link className="arrow-link" to={`/realisation/${item.id}`}>
                                            <SvgArrow/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="btn-container">
                            <a className="btn">
                                MORE
                                </a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Portfolio
