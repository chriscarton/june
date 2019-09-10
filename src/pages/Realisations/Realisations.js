import React, { Component } from 'react';
import "./Realisations.scss";
import camera from '../../assets/img/camera.png';
import Portfolio from '../../components/Portfolio/Portfolio.js';
import banVideo from '../../assets/videos/mrs-june-reveal.mp4';

export default class Realisations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showing:'brand'
        }
    }

    componentDidMount() {
        //Pour aller en haut de la page dès qu'on arrive sur celle-ci
        window.scrollTo(0, 0);
    }

    scrollToPortfolio(){
        let portfolio = document.querySelector('#Portfolio');
        console.log(portfolio);
        let y = portfolio.offsetTop-145;
        window.scrollTo(0,y);
    }

    filterBrand(e){
        //alert('Brand!');
        this.switchActiveClass(e.target);
        this.setState({showing:'brand'});
        this.scrollToPortfolio();
    }

    switchActiveClass(target){
        let previously_active = document.querySelector('.active');
        previously_active.classList.remove('active');
        target.classList.add('active');
    }

    //Rien à voir avec event de JavaScript hin !
    filterEvent(e) {
        this.switchActiveClass(e.target);
        this.setState({ showing: 'event' });
        this.scrollToPortfolio();
        //Rendu conditionnel de Portfolio avec une props ???
    }

    hideCameraIcon(){
        let ban = document.querySelector('.ban');
        let camera_container = ban.querySelector('.camera-container');
        //ceci fonctionne
        camera_container.classList.add('disapear');
    }

  
    render() {
        return (
            <div id="Realisations">
                <div className="ban">

                    <video
                        autoPlay muted loop
                        className="media-video"
                        onLoadedData={(e) => this.hideCameraIcon()}

                    >
                        <source src={banVideo} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>

                    <div className="content">
                        <div className="encart">
                            <h1>Nos réalisations</h1>
                            <p>
                                Lorem ipsum dolor si amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="camera-container">
                            <a>
                                <img src={camera} alt="Icône caméra" />
                            </a>
                        </div>
                        <div className="buttons">
                            <a className="btn active" onClick={(e) => this.filterBrand(e)}>Brand</a>
                            <a className="btn" onClick={(e) => this.filterEvent(e)}>Event</a>
                        </div>
                    </div>
                </div>
                <Portfolio showing={this.state.showing}/>
            </div>
        )
    }
}
