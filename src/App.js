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

    const handleCategorySelect = (e) => setSelectedCategory(e.target.value.toLowerCase())
    const handleCountryChange = (e) => setSelectedCountry(e.target.value)
    const handleTyping = (e) => setSearchString(e.target.value)
    const handleSearch = (e) => setSearchText(searchString)
    const handleSourceChange = (e) => setSelectedSource(e.target.value)

  return (
    <div>
      <ClickContext.Provider value={handleSearch} >
        <KeyUpContext.Provider value={handleTyping}>
      <Header
        filteredArticles = {filteredArticles}
        selectedCountry = {selectedCountry}
        handleCountryChange={handleCountryChange}
        handleCategorySelect={handleCategorySelect}
        handleTyping={handleTyping}
        handleSearch = {handleSearch}
        handleSourceChange = {handleSourceChange}
        filteredSources = {filteredSources}
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