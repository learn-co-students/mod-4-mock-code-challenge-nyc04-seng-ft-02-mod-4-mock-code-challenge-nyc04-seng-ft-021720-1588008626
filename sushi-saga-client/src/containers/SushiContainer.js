import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const itemsPerPage = 4;

class SushiContainer extends React.Component {

  state = {
    sushi: [],
    sushiLoaded: false,
    currentPage: 1,
  }

  componentDidMount() {
    this.fetchSushi();
  }

  fetchSushi() {
    fetch(this.props.api)
      .then(r => r.json())
      .then(fetchedSushi => this.setState({ sushi: fetchedSushi, sushiLoaded: true }));
  }

  renderSushiComponents() {
    const startSlice = (this.state.currentPage * itemsPerPage) - itemsPerPage;
    const endSlice = startSlice + itemsPerPage;

    console.log('slice:', startSlice, endSlice);

    return this.state.sushi.map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} eatSushi={this.eatSushi} eaten={sushi.eaten} />;
    })
      .slice(startSlice, endSlice);
  }

  eatSushi = (sushi) => {
    // only proceed is sushi hasn't already been eaten
    if (!sushi.eaten) {
      // attempt to buy the sushi
      if (this.props.attemptToChargeWallet(sushi.price)) {
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

  advancePage = () => {
    const numOfPages = Math.ceil(this.state.sushi.length / itemsPerPage);
    if (this.state.currentPage < numOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else {
      this.setState({ currentPage: 1 });
    }
  }

  render() {
    // console.log(this.props, this.state);
    return (
      this.state.sushiLoaded
      ?
      <div className="belt">
        {this.renderSushiComponents()}
        <MoreButton advancePage={this.advancePage} />
      </div>
      :
      <p>Loading...</p>
    )
  }
}

export default SushiContainer
