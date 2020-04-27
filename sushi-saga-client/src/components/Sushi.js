import React from 'react'

class Sushi extends React.Component {

  state = {
    sushi: this.props.sushi,
    present: true
  }

  eat = () => {
    if((this.props.money - this.props.sushi.price) >= 0) {
      this.setState({ present: false })
      this.props.eatenSushi(this.props.sushi)
    }
  }
  
  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.eat}>
          { this.state.present ? <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" /> : null}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}


export default Sushi