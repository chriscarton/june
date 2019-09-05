import React, { Component } from 'react';
import './Presentation.css';

export class Presentation extends Component {
    render() {
        return (
            <div id="Presentation">
                <h1>
                    Nous sommes une agence de production audiovisuelle<br/>
                    basée à Tourcoing à proximité de Lille
                </h1>
                <p>
                    Notre mission: Concevoir et produire la solution audiovisuelle audacieuse qui saura toucher <br/>
                    l'audience et le marché ciblés des marques pour qui nous travaillons
                </p>
                <div className="link-container">
                    <a>Voir nos projets</a>
                </div>
            </div>
        )
    }
}

export default Presentation
