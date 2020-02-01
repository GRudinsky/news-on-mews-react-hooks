import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bulma'
import './App.scss'
import Header from './components/Header'
import NewsContainer from './components/NewsContainer'

export const ClickContext = React.createContext()
export const KeyUpContext = React.createContext()

export default function App() {
  const [news, setNews] = useState(null)
  const [errors, setErrors] = useState(null)
  const [filteredArticles, setFilteredArticles] = useState(null)
  const [filteredSources, setFilteredSources] = useState([])
  const [selectedSource, setSelectedSource] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('gb')
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [searchString, setSearchString] = useState('')
  const [searchText, setSearchText] = useState('')

  const setData = (res) => setNews(res.data.articles, setFilteredArticles(res.data.articles, setFilteredSources([...new Set(res.data.articles.map(article => (article.source.name)))])))

  useEffect(() =>{
    console.log(selectedCategory)
    axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
      .then(res => setData(res))
      .catch(err => setErrors(err))
  },[selectedCountry, selectedCategory])
  
  useEffect(() =>{
    searchText !== '' &&
    axios.get(`https://newsapi.org/v2/everything?q=${searchText}&results=100&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
      .then(res => setData(res))
      .catch(err => setErrors(err))
  }, [filteredArticles, searchText])

  useEffect(() => {
    setFilteredArticles(selectedSource !== 'All' ? news.filter(article => article.source.name === selectedSource) : news)
  }, [news, selectedSource])

  return (
    <div>
      <ClickContext.Provider value={(e) => setSearchText(searchString)} >
        <KeyUpContext.Provider value={(e) => setSearchString(e.target.value)}>
          <Header
            filteredArticles = {filteredArticles}
            selectedCountry = {selectedCountry}
            filteredSources={filteredSources}
            handleCountryChange={(e) => setSelectedCountry(e.target.value)}
            handleCategorySelect={(e) => setSelectedCategory(e.target.value.toLowerCase())}
            handleSourceChange={(e) => setSelectedSource(e.target.value)}
          />
        </KeyUpContext.Provider>
      </ClickContext.Provider>
      <NewsContainer 
        news = {news}
        filteredArticles={filteredArticles}
        errors={errors}
        />
    </div>
  )
}