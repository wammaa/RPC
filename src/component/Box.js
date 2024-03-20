import React from 'react'

const Box = (props) => {
  let result;
  if(props.title === "COMPUTER" && props.result !== "TIE" && props.result !== ''){
    result = props.result === "WIN" ? "LOSE" : "WIN";
  }else{
    result = props.result;
  }
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} className='item-img'/>
      <h2 className={`${result}`}>{result}</h2>
    </div>
  )
}

export default Box
