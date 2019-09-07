import React, { Component } from 'react';
import './Footer.scss';

//Icônes socials : 
import linkedin from '../../assets/img/socials/linkedin.png';
import vimeo from '../../assets/img/socials/vimeo.png';
import instagram from '../../assets/img/socials/instagram.png';
import facebook from '../../assets/img/socials/facebook.png';


export class Footer extends Component {
    render() {
        return (
            <footer id="Footer">
                <div className="grid">
                    <div className="col-1">

                        <div className="block">
                            <div className="icon"></div>
                            <p>
                                191, rue des 5 voies <br/>
                                59200 Tourcoing
                            </p>
                        </div>
                        <div className="block">
                            <div className="icon"></div>
                            <p>
                                03 20 20 94 32
                            </p>
                        </div>
                        <div className="block">
                            <div className="icon"></div>
                            <p>
                                hello(at)mrsjune.fr
                            </p>
                        </div>

                        <div className="socials">
                            <a>
                                <img src={linkedin}/>
                            </a>
                            <a>
                                <img src={vimeo} />
                            </a>
                            <a>
                                <img src={instagram} />
                            </a>
                            <a>
                                <img src={facebook} />
                            </a>
                        </div>

                    </div>
                    <div className="col-2">
                        <nav className="menu">
                            <a>home</a>
                            <a>expertises</a>
                            <a>l'agence</a>
                            <a>réalisations</a>
                            <a>études de cas</a>
                        </nav>

                        <p className="accroche">
                            Envie de croiser vos idées avec nos expertises, prenons <br/> 
                            <a className="contact">contact</a> pour échanger sur vos projets
                        </p>

                        <div className="mentions">
                            <a>mentions légales</a> @MrsJune 2019
                        </div>
                    </div>
                    <div className="etiquette">
                        (logo ici vertical Mrs June)
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
