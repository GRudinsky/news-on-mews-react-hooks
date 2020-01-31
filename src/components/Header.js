import React from 'react'
import PageTitle from './common/PageTitle'
import Selector from './common/Selector/Selector'
import SearchBar from './common/SearchBar'
import ButtonsBar from './common/ButtonsBar/ButtonsBar'

export default function Header(props) {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
  const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']
  return (
    <header className="navbar">
      <PageTitle />
      <div className="selectors">
        <Selector 
          name={'Source'}
          onChange={props.handleSourceChange}
          data={props.filteredSources}
          defaultValue={'All'}
        />
        <ButtonsBar
          data={categories}
          onClick={props.handleCategorySelect}
          />
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
