import React, { Component } from 'react';
import "./Realisations.scss";
import logo from '../../assets/img/logo.png';
import camera from '../../assets/img/camera.png';


export default class Realisations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    id: 1,
                    title: 'Titre projet 1',
                    client: 'Coca Cola',
                    video_type: 'Promotionnel'
                },
                {
                    id: 2,
                    title: 'Titre projet 2',
                    client: 'Carrefour',
                    video_type: 'Interne'
                },
                {
                    id: 3,
                    title: 'Titre projet 3',
                    client: 'Mc Donalds',
                    video_type: 'Spot TV'
                }
            ]
        }
    }

    /*

        //hmmm je vais pas m'emmerder avec ça 
        //c'est un site vitrine, on sait combien d'élement il va y avoir
        //on met la height en dur dans le css

    componentDidMount() {

        const entriesElmnt = document.querySelector('.entries');
        let height = entriesElmnt.offsetHeight;

        console.log(height);

        const portfolioElmnt = document.querySelector('#Portfolio');
        portfolioElmnt.style.height = height;
        //console.log;
        //portfolioElmnt.offsetHeight = height;
    }
    */
    render() {
        const entries = this.state.entries;
        return (
            <div id="Realisations">
                <div className="header-container">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>
                <div className="ban">
                    <div className="content">
                        <div className="encart">
                            <h1>Nos réalisations</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sit porro numquam unde dolorum odio ipsa expedita quidem? Nisi, hic dolor nesciunt molestias animi sit soluta fugit eos odio veritatis.</p>
                        </div>
                        <div className="camera-container">
                            <a>
                                <img src={camera} alt="Icône caméra" />
                            </a>
                        </div>
                        <div className="buttons">
                            <a className="btn">Brand</a>
                            <a className="btn">Event</a>
                        </div>
                    </div>
                </div>
                <div id="Portfolio">
                    <div className="centered">

                        <div className="entries">
                            {entries.map((entry) =>
                                <div className="entry">
                                    <div className="media">

                                    </div>
                                    <div className="cartouche">
                                        <h2>{entry.title}</h2>
                                        <div>
                                            {entry.client} <br />
                                            {entry.video_type}
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
            </div>
        )
    }
}
