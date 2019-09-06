import React, { Component } from 'react'

export class WhyWeDoThis extends Component {
    render() {
        return (
            <div id="WhyWeDoThis">
                <div className="grid">
                    <div>VIDEO</div>
                    <div className="grid">
                        <div className="row">
                            <h1>Why we do this ?</h1>
                            <p>
                                Pour réaliser des projets audiovisuels évoquant des sentiments<br/>
                                forts et connectés à l'ADN de la marque de nos clients...
                                mais aussi des concepts techniques pointus et créatifs.
                            </p>
                        </div>
                        <div className="row" id="Avis">
                            <p>
                                Mrs June a su faire preuve d'une réelle écoute et ainsi répondre avec pertinence à un cahier des charges rigoureux et exigeant pour notre projet de vidéo de lancement de produit. Son professionnalisme et son expertise ont permis la réactivité imposée par un planning très étroit. Un scénario créatif et différenciant, un casting idéal, des techniciens hors pairs, sans oublier les décors et la styliste qui avait l'oeil à tout. Un sans-faute pour un résultat à la hauteur des attendus.
                            </p>
                            <p className="sign">François A : Directeur Programme et innovation Sergic</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyWeDoThis
