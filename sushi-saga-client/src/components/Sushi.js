import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
    { props.consumed.includes(props.sushiObj)? 
    <div className="plate">
    </div>:
    <div className="plate" 
    onClick={() => props.eat(props.sushiObj)}>
    <img src= {props.sushiObj.img_url}width="100%" />
    </div>
      }
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi

// { 
//   /* Tell me if this sushi has been eaten! */ 
//   false ?
//     null
//   :
//     <img src={props.sushi.img_url } width="100%" />
// }