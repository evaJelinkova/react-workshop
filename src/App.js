import React from 'react';
import logo from './logo.svg';
import './App.css';
import notebook from "./notebook.jpg"
import titanic from "./titanic.png"
import madagascar from "./madagascar.jpeg"

function Movie(props) {
  return (
    <div>
<h5>{props.title} (Score: {props.score})</h5>
        <img src={props.image} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Best Movies</h1>
        <Movie title="Notebook" image={notebook} score="9.5"/>
        <Movie title="Titanic" image={titanic} score="8.9"/>
        <Movie title="Madagascar" image={madagascar} score="9.3"/>
    
    </div>
  );
}

export default App;


// ECMAScript -> TC-39
// Styling standards
// by AirB&B