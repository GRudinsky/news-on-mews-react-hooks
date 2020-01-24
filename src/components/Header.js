import React from 'react'
import Selector from './common/Selector'
import SearchBar from './common/SearchBar'

function Header(props) {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
  const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']
  return (
    <header className="navbar">
      <div className="pageTitle">
        <h1>News On The Mews</h1>
        <p>powered by NewsApi.org</p>
      </div>
      <div className="selectors">
        <Selector 
          name={'Source'}
          onChange={props.handleSourceChange}
          data={props.filteredSources}
          defaultValue={'All'}
        />
        <div className="buttons">
          {categories.map(cat => (
            <button className="categoryButton" onClick={props.handleCategorySelect} key={cat} value={cat}>{cat}</button>
          ))}
        </div>
        <Selector 
          name={'Country'}
          onChange={props.handleCountryChange}
          data={countries}
          defaultValue={props.selectedCountry}
        />
      </div>
      <SearchBar />
    </header>
  )
}

export default Header
