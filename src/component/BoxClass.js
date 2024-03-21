import React, { Component } from 'react'

export default class BoxClass extends Component {
  constructor(){
    super()
    this.result = ''
  }

  getResult=()=>{
    if(this.props.title === "COMPUTER" && this.props.result !== "TIE" && this.props.result !== ''){
      this.result = this.props.result === "WIN" ? "LOSE" : "WIN";
    }else{
      this.result = this.props.result;
    }
  }
  
  render() {
    this.getResult();
    return (
      <div className="box">
        <h1>{this.props.title}</h1>
        <img src={this.props.item && this.props.item.img} className='item-img'/>
        <h2 className={`${this.result}`}>{this.result}</h2>
      </div>
    )
  }
}
