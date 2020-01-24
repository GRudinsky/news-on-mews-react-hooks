import React, {useContext} from 'react'
import {ClickContext, KeyUpContext} from '../../App'

function SearchBar() {
  const onKeyUp = useContext(KeyUpContext)
  const onClick = useContext(ClickContext)
  return (
    <div className="searchBar">
      <input onKeyUp={onKeyUp} name="searchInput" placeholder="Search..."></input>
      <button className="searchSubmit" onClick={onClick}>Search</button>
    </div>
  )
}

export default SearchBar
