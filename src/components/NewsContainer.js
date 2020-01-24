import React from 'react'
import ContentCard from './common/ContentCard'

export default function NewsContainer(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="articles">
          {!props.news && !props.errors && <p className="message warning">Loading......</p>}
          {props.news === [] && <p className="warning">Check your search criteria and try again </p>}
          {props.errors && <p className="warning">Oops, something went wrong</p>}
          {props.news &&
            props.filteredArticles.map(article => (
              <ContentCard 
              article = {article}
              />
            ))}
        </div>
      </div>
    </div>
  )
}