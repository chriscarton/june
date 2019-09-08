import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

//Icônes localisation, phone et mail
import localisation from '../../assets/img/localisation.png';
import phone from '../../assets/img/phone.png';
import mail from '../../assets/img/mail.png';

//Icônes socials : 
import linkedin from '../../assets/img/socials/linkedin.png';
import vimeo from '../../assets/img/socials/vimeo.png';
import instagram from '../../assets/img/socials/instagram.png';
import facebook from '../../assets/img/socials/facebook.png';

//Étiquette
import logoVertical from '../../assets/img/logo-vertical.png';



export class Footer extends Component {

    handleHover(e) {
        e.preventDefault();
        alert('hover');
    }

    render() {
        
        return (
            <footer id="Footer">
                <div className="grid">
                    <div className="col-1">

                        <div className="block">
                            <div className="icon localisation">
                                <img src={localisation} alt="Icône cible"/>
                            </div>
                            <p>
                                191, rue des 5 voies <br/>
                                59200 Tourcoing
                            </p>
                        </div>
                        <div className="block">
                            <div className="icon phone">
                                <img src={phone} alt="Icône téléphone portable"/>
                            </div>
                            <p>
                                03 20 20 94 32
                            </p>
                        </div>
                        <div className="block">
                            <div className="icon mail">
                                <img src={mail} alt="Icône avion en papier"/>
                            </div>
                            <p>
                                hello(at)mrsjune.fr
                            </p>
                        </div>

                        <div className="socials">
                            <a onHover={this.handleHover}>
                                {/* <img src={linkedin}/> */}
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a>
                                {/* <img src={vimeo} /> */}

                                <i class="fab fa-vimeo-v"></i>
                            </a>
                            <a>
                                {/* <img src={instagram} /> */}
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a>
                                {/* <img src={facebook} /> */}
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>

                    </div>
                    <div className="col-2">
                        <nav className="menu">
                            <Link to="/test">test</Link>
                            <Link to="/">home</Link>
                            <a>expertises</a>
                            <a>l'agence</a>
                            <Link to="/realisations">réalisations</Link>
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
                        <img src={logoVertical} alt="Logo Mrs June"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
