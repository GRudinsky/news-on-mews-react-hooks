import React from 'react'

export default function ContentCard(props) {
  return (
    <div className="card" key={props.article.title}>
      <a href={props.article.url} target="_blank" rel="noopener noreferrer">
        <div className="card-header">
          <h2 className="card-header-title">{props.article.title}</h2>
        </div>
        <div className="card-content">
          <p>{props.article.description}</p>
        </div>
        <figure className="image">
          <img className="card-image" src={props.article.urlToImage} alt='article' />
        </figure>
      </a>
    </div>
  )
}
