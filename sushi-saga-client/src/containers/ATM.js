import React from 'react';

class ATM extends React.Component {

  render() {
    return (
      <section className="ATM">
        <form onSubmit={this.props.handleSubmit}>
          <label>Withdraw: </label>
          <input type="text" name="money" />
          <input type="submit" value="Withdraw!" />
        </form>
        <div className="spent">
          <h1>You've spent ${this.props.spent}!</h1>
        </div>
      </section>
    )
  }

}

export default ATM;