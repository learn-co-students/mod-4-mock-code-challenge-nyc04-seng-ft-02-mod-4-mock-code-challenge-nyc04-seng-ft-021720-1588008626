import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi'
import ATM from './containers/ATM'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    index: 0,
    money: 100,
    eaten: [],
    spent: 0
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushi => this.setState({ sushi: sushi }))
  }

  eatenSushi = (sushi) => {
    let eaten = [...this.state.eaten, sushi]
    this.setState({
      money: this.state.money - sushi.price,
      eaten: eaten,
      spent: this.state.spent + sushi.price
    })
  }

  moreSushi = () => {
    this.setState({ 
      index: this.state.index + 4
    })
  }

  renderSushi = () => {
    return this.state.sushi
      .slice(this.state.index, this.state.index + 4)
      .map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenSushi={this.eatenSushi} money={this.state.money}/>)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const withdrawAmount = parseInt(event.target.money.value)
    this.setState({ money: this.state.money + withdrawAmount}, () => console.log(this.state.money))
    event.target.money.value = ""
  }

  render() {
    console.log(this.state.eaten)
    return (
      <div className="app">
        <ATM handleSubmit={this.handleSubmit} spent={this.state.spent}/>
        <SushiContainer sushi={this.state.sushi} eat={this.eat} renderSushi={this.renderSushi} moreSushi={this.moreSushi} />
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;