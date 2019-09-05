import React from 'react';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import Presentation from './components/Presentation/Presentation.js';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Menu/>
      <Home/>
      <Presentation/>
      <div>
        <h1>Autre chose...</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo suscipit molestiae unde. Ex vero deleniti voluptatibus quos, exercitationem ad incidunt excepturi illo corporis atque ratione nostrum sequi fuga nihil expedita?
      </div>

      <p>Voici ma nouvelle App</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <script src="https://player.vimeo.com/api/player.js"></script>
      <script>
        //Pour les vidéos
      </script>
    </div>
  );
}

export default App;
