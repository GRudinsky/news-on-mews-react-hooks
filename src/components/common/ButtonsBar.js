import React from 'react'
import Button from './Button/Button'

export default function ButtonsBar(props) {
  return (
    <div className="buttons">
      {props.data.map(title => (
        <Button 
          onClick={props.onClick}
          key={title}
          title={title}/>
      ))}
    </div>
  )
}


