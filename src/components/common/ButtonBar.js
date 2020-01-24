import React from 'react'

export default function ButtonsBar(props) {
  return (
    <div className="buttons">
      {props.data.map(item => (
        <button className="categoryButton" onClick={props.onClick} key={item} value={item}>{item}</button>
      ))}
    </div>
  )
}


