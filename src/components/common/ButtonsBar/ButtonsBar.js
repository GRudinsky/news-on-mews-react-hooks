import React from 'react'
import Button from '../Button/Button'

export default function ButtonsBar(props) {
  return (
    <div className="buttons">
      {props.data.map(title => (
        <Button 
          _onClick={props._onClick}
          key={title}
          title={title}/>
      ))}
    </div>
  )
}


