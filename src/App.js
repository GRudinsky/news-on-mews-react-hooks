import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bulma'
import './App.scss'

import Header from './components/Header'
import NewsContainer from './components/NewsContainer'


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

  useEffect(() =>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
      // .then(res => console.log(res.data))
      .then(res => setNews((res.data.articles), setFilteredArticles(res.data.articles)))
      .catch(err => setErrors(err))
  },[selectedCountry, selectedCategory])
  
  useEffect(() =>{
    searchText != '' &&
    axios.get(`https://newsapi.org/v2/everything?q=${searchText}&results=100&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
      // .then(res => console.log(res.data))
      .then(res => setNews((res.data.articles), setFilteredArticles(res.data.articles)))
      .catch(err => setErrors(err))
  }, [searchText])

  // useEffect(() =>{
  //   console.log(news)
  //   const sources = [...new Set(news.map(article => (article.source.name)))] || setSelectedSource('All')
  //   setFilteredSources(sources)
  // }, [news])

    const handleClick = (e) => setSelectedCategory(e.target.value.toLowerCase())
    const handleChange = (e) =>  setSelectedCountry(e.target.value)
    const handleKeyUp = (e) => setSearchString(e.target.value)
    const performSearch = (e) => setSearchText(searchString)
    const filterArticles = (e) => setSelectedSource(e.target.value)
    
    useEffect (() => {
    setFilteredArticles(selectedSource !== 'All' ? news.filter(article => article.source.name === selectedSource) : news)
    }, [news, selectedSource])
  
    //filterArticles(e) {
//     const selectedSource = e.target.value
//     this.setState({ filteredArticles: (selectedSource !== 'All' ? this.state.news.articles.filter(article => article.source.name === selectedSource) : this.state.news.articles) })
//   }

  
  return (
    <div>
      <Header
      filteredArticles = {filteredArticles}
      selectedCountry = {selectedCountry}
      handleChange = {handleChange}
      handleClick = {handleClick}
      handleKeyUp = {handleKeyUp}
      performSearch = {performSearch}
      filterArticles = {filterArticles}
      filteredSources = {filteredSources}
       />
      <NewsContainer 
        news = {news}
        filteredArticles={filteredArticles}
        errors={errors}
        />
    </div>
  )
}


// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       news: null,
//       errors: null,
//       selectedCategory: 'general',
//       selectedCountry: 'gb',
//       searchString: '',
//       filteredSources: [],
//       filteredArticles: [],
//       selectedSource: 'All'
//     }
//     this.handleSourceChange = this.handleSourceChange.bind(this)
//     this.handleKeyUp = this.handleKeyUp.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.performSearch = this.performSearch.bind(this)
//     this.filterArticles = this.filterArticles.bind(this)
//   }
//   componentDidMount() {
//     this.getData(this.state.selectedCountry, this.state.selectedCategory)
//   }

//   handleClick(e) {
//     const selectedCategory = e.target.value.toLowerCase()
//     this.setState({ selectedCategory })
//     this.getData(this.state.selectedCountry, selectedCategory)
//   }

//   handleChange(e) {
//     const selectedCountry = e.target.value
//     this.setState({ selectedCountry })
//     this.getData(selectedCountry, this.state.selectedCategory)
//   }
//   handleSourceChange(e) {
//     const selectedSource = e.target.value
//     const filteredArticles = selectedSource !== 'All' ? this.state.news.articles.filter(article => (
//       article.source.name === selectedSource)) : this.state.news.articles
//     // console.log('sources', filteredArticles)
//     return filteredArticles
//   }

//   handleKeyUp(e) {
//     const searchString = e.target.value
//     this.setState({ searchString })
//     // console.log(searchString)
//   }

//   performSearch() {
//     axios.get(`https://newsapi.org/v2/everything?q=${this.state.searchString}&results=100&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
//       // .then(res => console.log(res.data))
//       .then(res => {
//         this.setState({ news: res.data, filteredArticles: res.data.articles }, this.retrieveSources)
//       })
//       .catch(err => console.log(err))
//   }

//   getData(selectedCountry, selectedCategory) {
//     // console.log('filter state', this.state.filteredSources)
//     axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apikey=${process.env.REACT_APP_WEBAPI_ACCESS_TOKEN}`)
//       .then(res => {
//         this.setState({ news: res.data, filteredArticles: res.data.articles }, this.retrieveSources)
//       })
//       .catch(err => console.log(err.message))
//   }

//   retrieveSources() {
//     const filteredSources = [...new Set(this.state.news.articles.map(article => (article.source.name)))] || this.selectedSource === 'All'
//     this.setState({ filteredSources })
//   }

//   filterArticles(e) {
//     const selectedSource = e.target.value
//     this.setState({ filteredArticles: (selectedSource !== 'All' ? this.state.news.articles.filter(article => article.source.name === selectedSource) : this.state.news.articles) })
//   }
//   render() {
//     // console.log('rendering', this.state)
//     return (
//       <>
//       <Header
//       filteredArticles = {this.filteredArticles}
//       selectedCountry = {this.selectedCountry}
//       handleChange = {this.handleChange}
//       handleClick = {this.handleClick}
//       handleKeyUp = {this.handleKeyUp}
//       performSearch = {this.performSearch}
//       filterArticles = {this.filterArticles}
//       filteredSources = {this.state.filteredSources}
//        />
//        <NewsContainer 
//        news = {this.state.news}
//        errors = {this.state.errors}
//        filteredArticles = {this.state.filteredArticles}
//        />
//       </>
//     )
//   }
// }