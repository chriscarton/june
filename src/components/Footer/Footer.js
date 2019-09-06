import React, { Component } from 'react'

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
                            <a>Linked</a>
                            <a>Vimeo</a>
                            <a>Insta</a>
                            <a>Facebook</a>
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

                        <p>Envie de croiser vos idées avec nos expertises, prenons <b>contact pour échanger sur vos projets</b></p>

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
