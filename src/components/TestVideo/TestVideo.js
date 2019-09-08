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
                }
            ]
        }
    }

    componentDidMount(){
        let elmnt = document.querySelector('#videoBan');
        elmnt.addEventListener('click',function(e){
            alert('me');
        });
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
                <section className="container">
                    <div className="grid">

                    </div>
                </section>
            </div>
            
        )
    }
}

export default TestVideo
