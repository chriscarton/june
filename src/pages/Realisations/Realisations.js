import React, { Component } from 'react';
import "./Realisations.scss";
import logo from '../../assets/img/logo.png';
import camera from '../../assets/img/camera.png';


export default class Realisations extends Component {
    render() {
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
                        <div class="camera-container">
                            <a>
                                <img src={camera} alt="Icône caméra" />
                            </a>
                        </div>
                        <div className="buttons">
                            <a>Brand</a>
                            <a>Event</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
