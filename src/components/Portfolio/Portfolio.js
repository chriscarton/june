import React, { Component } from 'react';
import './Portfolio.scss';
/*
import videoSrc1 from '../../assets/videos/kungfu.mp4';
import videoSrc2 from '../../assets/videos/rocket_launching.mp4';
import videoSrc3 from '../../assets/videos/velo.mp4';
*/

//On va passer aux vraies videos (en petite résolution...)
import videoSrc1 from '../../assets/videos/projets/le-pas-de-calais.mp4';
import videoSrc2 from '../../assets/videos/projets/sgi-dec-corporate.mp4';
import videoSrc3 from '../../assets/videos/projets/deux-caps-survol.mp4';


export class Portfolio extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Le Pas de Calais',
                    client: '',
                    video_type: '', 
                    src: videoSrc1
                },
                {
                    id: 2,
                    name: 'SGI DEC CORPORATE',
                    client: '',
                    video_type: '',
                    src: videoSrc2
                },
                {
                    id: 3,
                    name: 'Deux Caps Survol',
                    client: '',
                    video_type: '',
                    src: videoSrc3
                },
            ]
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    mouseEnter(target) {
        target.play();
    }

    mouseLeave(target) {
        target.pause();
    }

    render() {
        const items = this.state.items;

        return (
            <div id="Portfolio">
                
                <div className="centered">

                    <div className="entries">
                        {items.map((item) =>
                            <div className="entry">
                                <div className="media">
                                    <video
                                        muted loop id="myVideo"
                                        onMouseEnter={(e) => this.mouseEnter(e.target)}
                                        onMouseLeave={(e) => this.mouseLeave(e.target)}
                                    >
                                        <source src={item.src} type="video/mp4" />
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                </div>
                                <div className="cartouche">
                                    <h2>{item.name}</h2>
                                    <div>
                                        {item.client} <br />
                                        {item.video_type}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="btn-container">
                            <a class="btn">
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
