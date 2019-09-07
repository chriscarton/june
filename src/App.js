import React from 'react';

import Menu from './components/Menu/Menu.js';
import Footer from './components/Footer/Footer.js';

//Importation des pages
import Home from './pages/Home/Home.js';
import Realisations from './pages/Realisations/Realisations.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import logo from './logo.svg';
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

        <Menu/>
        <div id="fakeMenu">
          <Link to="/">Accueil</Link>
          <br/>
          <Link to="/realisations">Réalisations</Link>
        </div>
        <div id="Content">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/realisations" exact component={Realisations}/>
            <Route path="/realisations/:id" exact component={Realisations}/>

          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>

      
      
      
  );
}

export default App;
