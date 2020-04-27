import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.balance} remaining!

        <form onSubmit ={props.update}>
        <label>
          Balance Update!:
          <input type="text" name="balance" value={props.wantedBalance} onChange={props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.consumed)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table