import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    startIndex: 0,
    error: null,
    isLoaded: false,
    items: []
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi() {
    fetch(API)
    .then(response => response.json())
    .then(sushi => {
      this.setState({
        items: sushi,
        isLoaded: true
      })
    })
  }

  renderMoreSushi(prevState) {
    this.setState({
      startIndex: (prevState.startIndex + 4)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer items={this.state.items} startIndex={this.state.startIndex} moreSushi={this.renderMoreSushi} />
        <Table />
      </div>
    );
  }
}

export default App;