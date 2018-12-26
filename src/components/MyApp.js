import React from 'react'
import List from './List/List'
import data from '../data/shows.json'
class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shows: [],
    }
  }

  componentDidMount() {
    this.setState(
      (state, props) => ({ shows: data })
    )
  }

  render () {
    return (
      <div>
        <List shows={ this.state.shows }/>
      </div>
    )
  }
}

export default MyApp
