import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.items
    .slice(props.startIndex, props.startIndex + 4)
    .map(item => <Sushi key={item.id} name={item.name} img={item.img_url} price={item.price} />)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onClick={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer