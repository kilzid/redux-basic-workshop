import React from 'react'
import List from './List/List'
import Header from './Header/Header'

import data from '../data/shows.json'
class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shows: [],
    }
  }

  doSearch(searchTerm) {
    console.log('Search term:', searchTerm)
  }
  componentDidMount() {
    this.setState(
      (state, props) => ({ shows: data })
    )
  }

  render () {
    return (
      <div>
        <Header doSearch={this.doSearch}/>
        <List shows={ this.state.shows }/>
      </div>
    )
  }
}

export default MyApp
