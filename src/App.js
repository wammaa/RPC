import {useState} from "react"
import './App.css';
import Box from './component/Box';

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  }

  const judgement = (user, computer) => {
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

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)
    console.log(itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  return (
    <div className="body">
      <div className='main'>
        <Box title='YOU' item={userSelect} result={result}/>
        <Box title='COMPUTER' item={computerSelect} result={result}/>
      </div>
      <div className='buttons'>
        <button onClick={()=>play("Scissors")}><i class="fa-regular fa-hand-scissors"></i></button>
        <button onClick={()=>play("Rock")}><i class="fa-regular fa-hand-back-fist"></i></button>
        <button onClick={()=>play("Paper")}><i class="fa-regular fa-hand"></i></button>        
      </div>
    </div>
  );
}

export default App;
