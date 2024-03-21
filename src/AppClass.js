import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
  Rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  Paper:{
    name:"Paper",
    img:"https://img.freepik.com/premium-vector/cute-paper-character-in-sweet-expression-while-sticking-out-her-tongue_152558-92146.jpg"
  },
  Scissors:{
    name:"Scissors",
    img:"https://img.freepik.com/premium-vector/cute-funny-scissors-character_464314-1809.jpg"
  }
}

export default class AppClass extends Component {
  constructor(){
    super();
    this.state = {
      userSelect : null,
      computerSelect : null,
      result : ''
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice()
    this.setState({
      userSelect : choice[userChoice],
      computerSelect : computerChoice,
      result : this.judgement(choice[userChoice], computerChoice)
    })
  }

  randomChoice=()=>{
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  judgement = (user, computer) => {
    console.log(user, computer)
    if(user.name === computer.name){
      return "TIE"
    }else if (user.name === "Rock")
    return computer.name === "Scissors" ? "WIN" : "LOSE";
    else if (user.name === "Paper")
    return computer.name === "Rock" ? "WIN" : "LOSE";
    else if (user.name === "Scissors")
    return computer.name === "Paper" ? "WIN" : "LOSE";
  }

  render() {
    return (
      <div className="body">
        <div className='main'>
          <BoxClass title = "YOU" item = {this.state.userSelect} result = {this.state.result}/>
          <BoxClass title = "COMPUTER" item = {this.state.computerSelect} result = {this.state.result}/>
        </div>
        <div className='buttons'>
          <button onClick={()=>this.play("Scissors")}><i class="fa-regular fa-hand-scissors"></i></button>
          <button onClick={()=>this.play("Rock")}><i class="fa-regular fa-hand-back-fist"></i></button>
          <button onClick={()=>this.play("Paper")}><i class="fa-regular fa-hand"></i></button>        
        </div>
      </div>
    )
  }
}
