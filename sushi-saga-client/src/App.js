import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushis : [],
  page: 0,
  balance: 100,
  sushiEaten: []
}

componentDidMount(){
  fetch(API)
  .then(r => r.json())
  .then(sushis => this.setState({sushis : sushis},()=> console.log(this.state)))
}

renderSushiPage = () => {
  let sushis = [...this.state.sushis]
  let startingPage = this.state.page * 4 
  let endingPage = (startingPage + 4)
  let sushiReturned = sushis.slice(startingPage, endingPage)
  return sushiReturned
}

sushiNextPage = () =>{

  if((this.state.page * 4) === (this.state.sushis.length-4)){
    return null
  }
  else{
  this.setState((prevState)=>({
    page: prevState.page += 1
  }))
  
}
}

onClickSushiEat = (sushi) =>{
  if(this.state.balance > sushi.price){
  let sushisEaten = [...this.state.sushiEaten]
  sushisEaten.push(sushi)

  this.setState({
    sushiEaten: sushisEaten
  }, () => console.log(this.state))

  this.setState((prevState) =>({
    balance: prevState.balance - sushi.price
  }))
}


}



  render() {
    

    return (
      <div className="app">
        <SushiContainer sushi = {this.renderSushiPage} onClick = {this.sushiNextPage} eat = {this.onClickSushiEat} consumed = {this.state.sushiEaten} />

        <Table balance = {this.state.balance} consumed={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;