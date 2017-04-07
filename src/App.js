import React, { Component } from 'react';
import logo from './PrisonMike.png';
import decoupage from './decoupage.jpg';
import trexoragami from './trexoragami.jpeg'
import tphouse from './tphouse.jpg'
import pinata from './pinata.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to All Things Paper!!!!!</h2>
        </div>
        <p className="App-intro">
          Here you learn all the wonderous creations of paper!
        </p>
        <ul className="Paper-list"> 
          <li>
            Paper Mache (Contact local Arity Expert: Chris Miller)
            <ul>
              <li>
                Pinata
              </li>
              <img src={pinata} height="100" width="150"/>
            </ul>
          </li>
          <li>
            Decoupage (Contact local Arity Expert: Laura (Guess))
          </li>
          <img src={decoupage} height="100" width="100"/>
          <li>
            Origami
          </li>
          <img src={trexoragami} height="100" width="150"/>
          <li>
            TP Luis' House (duh)
          </li>
          <img src={tphouse} height="100" width="150"/>
          <li>
            Poster Board
          </li> 
        </ul>
      </div>
    );
  }
}

export default App;
