import React, { Component } from 'react';
import './TestVideo.scss';

import videoSrc1 from '../../assets/videos/kungfu.mp4';
import videoSrc2 from '../../assets/videos/rocket_launching.mp4';
import videoSrc3 from '../../assets/videos/velo.mp4';


export class TestVideo extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:1,
                    name:'Kung Fu',
                    src:videoSrc1
                },
                {
                    id: 2,
                    name: 'Rocket Launching',
                    src: videoSrc2
                },
                {
                    id: 3,
                    name: 'Velo',
                    src: videoSrc3
                },
            ]
        }
        this.mouseEnter = this.mouseEnter.bind(this);

    }

    componentDidMount(){
        let elmnt = document.querySelector('#videoBan');
        elmnt.addEventListener('click',function(e){
            //alert('me');
        });
    }

    mouseEnter(target){
        target.play();
    }

    mouseLeave(target){
        target.pause();
    }

    render() {
        return (
            <div id="TestVideo">
                <div id="videoBan">
                    {/* <video autoPlay muted loop id="myVideo">
                        <source src={videoSrc1} type="video/mp4"/>
                        Votre navigateur ne supporte pas la vidéo.
                    </video> */}
                    
                </div>
                <section>
                    <div className="container">
                        <div className="grid">
                            {this.state.items.map((item) => {
                                return (
                                    <div className="item">
                                        <div className="video">
                                            {/* Quand ce n'est pas en autoPlay déjà je rame moins */}
                                            <video 
                                                muted loop id="myVideo"
                                                onMouseEnter={(e) => this.mouseEnter(e.target)}
                                                onMouseLeave={(e) => this.mouseLeave(e.target)}
                                                >
                                                <source src={item.src} type="video/mp4" />
                                                Votre navigateur ne supporte pas la vidéo.
                                            </video>
                                        </div>
                                        <div className="text">
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default TestVideo
