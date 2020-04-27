import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';


const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi().map(sushi => <Sushi key={sushi.id} sushiObj={sushi} eat={props.eat} consumed={props.consumed}/>)
        }
        <MoreButton onClick ={props.onClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer