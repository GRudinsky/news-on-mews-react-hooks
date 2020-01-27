import React from 'react'

export default function Selector(props) {
 
  return (
    <>
      <p>{props.name}:</p>
      <select data-testid="selector" className="selector" onChange={props.onChange} >
        <option>{props.defaultValue}</option>
        {props.data.map((item, idx) =>
          <option key={idx}>{item}</option>
        )}
      </select>
    </>
  )
}
