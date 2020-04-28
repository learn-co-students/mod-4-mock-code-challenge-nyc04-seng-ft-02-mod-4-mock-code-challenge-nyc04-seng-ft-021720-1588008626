import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const itemsPerPage = 4;

class SushiContainer extends React.Component {

  state = {


    currentPage: 1,
  }



  renderSushiComponents() {
    const startSlice = (this.state.currentPage * itemsPerPage) - itemsPerPage;
    const endSlice = startSlice + itemsPerPage;

    console.log('slice:', startSlice, endSlice);

    return this.props.sushi
      .slice(startSlice, endSlice)
      .map(sushi => {
        return <Sushi key={sushi.id} sushi={sushi} eatSushi={this.props.eatSushi} eaten={sushi.eaten} />;
      });
  }

  advancePage = () => {
    const numOfPages = Math.ceil(this.props.sushi.length / itemsPerPage);
    if (this.state.currentPage < numOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else {
      this.setState({ currentPage: 1 });
    }
  }

  render() {
    // console.log(this.props, this.state);
    return (
      this.props.sushiLoaded
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
