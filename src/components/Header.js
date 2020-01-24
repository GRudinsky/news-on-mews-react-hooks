import React from 'react'

function Header(props) {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
  const countries = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'
  return (
    <header className="navbar">
      <div className="pageTitle">
        <h1>News On The Mews</h1>
        <p>powered by NewsApi.org</p>
      </div>
      <div className="selectors">
        <p>Source:</p>
        <select className="sourceSelect" onChange={''}>
          <option>All</option>
          {props.filteredSources.map(source =>
            <option key={source}>{source}</option>
          )}
        </select>
        <div className="buttons">
          {categories.map(cat => (
            <button className="categoryButton" onClick={props.handleClick} key={cat} value={cat}>{cat}</button>
          ))}
        </div>
        <p>Country:</p>
        <select className="languageSelector" onChange={props.handleChange} >
          <option>{props.selectedCountry}</option>
          {countries.split(' ').map(country =>
            <option key={country}>{country}</option>
          )}
        </select>
      </div>
      <div className="searchBar">
        <input onKeyUp={props.handleKeyUp} name="searchInput" placeholder="Search..."></input>
        <button className="searchSubmit" onClick={props.performSearch}>Search</button>
      </div>
    </header>
  )
}

export default Header
