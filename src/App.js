import React from 'react';

import Menu from './components/Menu/Menu.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

//Un petit composant pour voir comment se comportent les vidéos
import TestVideo from './components/TestVideo/TestVideo.js';

//Importation des pages
import Home from './pages/Home/Home.js';
import Realisations from './pages/Realisations/Realisations.js';
import Realisation from './pages/Realisation/Realisation.js';

//Composant NotFound
import NotFound from './components/NotFound/NotFound.js';


import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
//HashRouter pour essayer de régler le problème de refresh (en production)
//https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually

import './App.scss';

function App() {
/* 
Pour déployer dans un sous repertoire, voir basename sur Router et cet article : https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1 + les commentaires 
Voir aussi
https://skryvets.com/blog/2018/09/20/an-elegant-solution-of-deploying-react-app-into-a-subdirectory/
*/

  return (
    
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <div id="Content">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/realisations" exact component={Realisations}/>
              <Route path="/realisation/:id" exact component={Realisation}/>
              <Route path="/test" component={TestVideo} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    

      
      
      
  );
}

export default App;
