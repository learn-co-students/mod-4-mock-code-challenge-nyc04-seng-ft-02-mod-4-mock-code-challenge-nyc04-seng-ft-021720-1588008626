import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiLoaded: false,
    moneyInWallet: 0,
  }

  componentDidMount() {
    this.fetchSushi();
    this.addMoneyToWallet(250);  
  }

  render() {

    const platesEaten = this.state.sushi.filter(sushi => sushi.eaten)

    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi}
          sushiLoaded={this.state.sushi}
          attemptToChargeWallet={this.attemptToChargeWallet}
          eatSushi={this.eatSushi}
          />
        <Table 
          moneyInWallet={this.state.moneyInWallet} 
          platesEaten={platesEaten}
          />
        <Wallet addMoneyToWallet={this.addMoneyToWallet} />
      </div>
    );
  }

  fetchSushi() {
    fetch(API)
      .then(r => r.json())
      .then(fetchedSushi => this.setState({ sushi: fetchedSushi, sushiLoaded: true }));
  }  

  eatSushi = (sushi) => {
    // only proceed is sushi hasn't already been eaten
    if (!sushi.eaten) {
      // attempt to buy the sushi
      if (this.attemptToChargeWallet(sushi.price)) {
        console.log('Eating', sushi.name);
        // set the sushi as already having been eaten
        const newSushiArray = this.state.sushi.map(sushiInArray => {
          if (sushiInArray === sushi) {
            sushiInArray.eaten = true;
          }
          return sushiInArray;
        })
        this.setState({ sushi: newSushiArray });
      } else {
        console.log('Not enough money for', sushi.name);
      }
    } else {
      console.log('already eaten')
    }
  }

  addMoneyToWallet = (amount) => {
    const newValue = this.state.moneyInWallet + amount;
    this.setState({ moneyInWallet: newValue });
  }

  attemptToChargeWallet = (amount) => {
    if (this.state.moneyInWallet >= amount){
      const newValue = this.state.moneyInWallet - amount;
      this.setState({ moneyInWallet: newValue });
      return true;
    } else {
      return false;
    }
  }
  
}

export default App;