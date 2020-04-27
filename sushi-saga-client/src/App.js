import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    moneyInWallet: 0,
    platesEaten: []
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          api={API} 
          attemptToChargeWallet={this.attemptToChargeWallet}
          />
        <Table 
          moneyInWallet={this.state.moneyInWallet} 
          platesEaten={this.state.platesEaten}
          />
        <Wallet addMoneyToWallet={this.addMoneyToWallet} />
      </div>
    );
  }

  componentDidMount() {
    this.addMoneyToWallet(250);  
  }

  addMoneyToWallet = (amount) => {
    const newValue = this.state.moneyInWallet + amount;
    this.setState({ moneyInWallet: newValue });
  }

  attemptToChargeWallet = (amount) => {
    if (this.state.moneyInWallet >= amount){
      const newValue = this.state.moneyInWallet - amount;
      const newPlateArray = this.state.platesEaten.concat(['plate'])
      this.setState({ moneyInWallet: newValue, platesEaten: newPlateArray });
      return true;
    } else {
      return false;
    }
  }
  
}

export default App;