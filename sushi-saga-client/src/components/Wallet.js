import React from 'react';

class Wallet extends React.Component{

	state = {
		amountToAdd: ''
	}

	handleAmountChange = (event) => {
		this.setState({ amountToAdd: event.target.value });
	}

	render() {
		return (
			<div id="wallet">
				<h3>Wallet</h3>
				<input type="number" placeholder='Add Specific Amount' value={this.state.amountToAdd} onChange={this.handleAmountChange} /><br/><br/>
				<button 
					onClick={() => {
						this.props.addMoneyToWallet(50);
					}}>
					Add $50
				</button>&nbsp;&nbsp;&nbsp;
				<button onClick={() => {
					this.props.addMoneyToWallet(parseFloat(this.state.amountToAdd || 0));
				}} >Add ${this.state.amountToAdd}</button>
			</div>
		);
	}
}

export default Wallet;