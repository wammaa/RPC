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
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className='main'>
        <Box title='YOU' item={userSelect}/>
        <Box title='COMPUTER'/>
      </div>
      <div className='main'>
        <button onClick={()=>play("Scissors")}>가위</button>
        <button onClick={()=>play("Rock")}>바위</button>
        <button onClick={()=>play("Paper")}>보</button>        
      </div>
    </div>
  );
}

export default App;
