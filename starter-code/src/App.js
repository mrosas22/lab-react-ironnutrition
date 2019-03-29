import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from ',/foods.json'
import FoodBox from './component/FoodBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map(element =>{
          <FoodBox  food= {element}/>
        })}
      </div>
    );
  }
}

export default App;
