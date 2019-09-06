import React, { Component } from 'react';
import './WhatAndForWho.scss';

export class WhatAndForWho extends Component {
    render() {
        return (
            <div id="WhatAndForWho">

                <div className="grid">

                    <div className="col">
                        <h1>What and for who</h1>
                        <p class="intro">
                            Nous mettons notre savoir-faire technique<br/>
                            et créatif, au service des directions <br/>
                            marketing, communication et<br/>
                            évènementielles des marques.
                        </p>

                        <div className="snippet">
                            <div className="title">VIDEO BRANDING</div>
                            <div className="text">
                                Nous produisons les contenus vidéos pour votre marque. 
                            </div>
                        </div>
                        <div className="snippet">
                            <div className="title">VIDEO FOR EVENT</div>
                            <div className="text">
                                Nous produisons les contenus vidéos pour votre marque. 
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="square">
                            VIDEO
                            BRANDING
                        </div>
                    </div>
                    <div className="col">
                        <div className="square">
                            VIDEO FOR<br/>
                            EVENT
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default WhatAndForWho
