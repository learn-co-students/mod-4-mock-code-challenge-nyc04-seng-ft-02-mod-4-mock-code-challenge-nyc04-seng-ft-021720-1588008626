import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.img} width="100%" alt={props.name} />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi