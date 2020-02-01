import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button data-testid="button" className="categoryButton" onClick={props._onClick} value={props.title}>{props.title}</button>
    </div>
  )
}
