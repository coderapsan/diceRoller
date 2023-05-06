
import './App.css';
import React from 'react';
import ReactDOM  from 'react-dom';

 function App() {
  const[diceState, setDiceState]= React.useState(6)
  function rollDice(){
    const randomNumber= Math.floor(Math.random()*6)+1
    return( setDiceState(randomNumber))
  }
 
 
  return (
    <div >
      <center>
        <h1 className="titleStyle"> Dice Roller </h1>
        <img src={require(`./assets/dice${diceState}.png`)} className="imageStyle"></img>
      <br>
      </br>
      <button className="buttonStyle" onClick={rollDice} > Roll the dice </button>
   
      </center>

      
     
      
    </div>
  );
}

export default App;
