import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        /*
            La méthode componentDidMount() est exécutée après que la sortie du composant a été injectée dans le DOM. 
        */
        
        let homeHtml = document.querySelector('#Home');
        
        let videoWidth = homeHtml.offsetWidth;
        let videoHeight = homeHtml.offsetHeight;

        this.setState({
            videoWidth:videoWidth,
            videoHeight:videoHeight
        });
    }

    render() {
        console.log('Dans render :');
        console.log(this.state.videoWidth);
        console.log(this.state.videoHeight);

        return (
            <div id="Home">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/320253595" width="{this.state.videoWidth}" height="{this.state.videoHeight}" frameborder="0" allowfullscreen></iframe>
                <div id="Logo">
                Mrs June
                </div>
                <div id="Punchline">
                <small>WE ARE VIDEOMAKERS</small>
                <p>Nous concevons des films et des<br/> approches audiovisuelles au services<br/> des marques et des événements</p> 
                </div>

            </div>
        )
    }
}

export default Home
