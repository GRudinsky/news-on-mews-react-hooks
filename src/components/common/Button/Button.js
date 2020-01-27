import React from 'react'

export default function Button(props) {
  return (
    <div>
<button data-testid="button" className="categoryButton" onClick={props.onClick} value={props.itle}>{props.title}</button>
    </div>
  )
}
