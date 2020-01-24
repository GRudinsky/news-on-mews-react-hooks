import React from 'react'

function NewsContainer(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="articles">
          {!props.news && !props.errors && <p className="message warning">Loading......</p>}
          {props.news === [] && <p className="warning">Check your search criteria and try again </p>}
          {props.errors && <p className="warning">Oops, something went wrong</p>}
          {props.news &&
            props.filteredArticles.map(article => (
              <div className="card" key={article.title}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <div className="card-header">
                    <h2 className="card-header-title">{article.title}</h2>
                  </div>
                  <div className="card-content">
                    <p>{article.description}</p>
                  </div>
                  <figure className="image">
                    <img className="card-image" src={article.urlToImage} alt='article' />
                  </figure>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsContainer
