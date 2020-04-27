import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = () => {
    return props.platesEaten.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: {props.moneyInWallet.toLocaleString(undefined, {
          style: 'currency',
          currency: 'USD'
        })} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates()}
        </div>
      </div>
    </Fragment>
  )
}

export default Table