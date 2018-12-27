import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from './List/List'
import Header from './Header/Header'
import * as actions from '../actions/index'

class MyApp extends React.Component {
  constructor(props){
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  componentDidMount() {
    this.doSearch()
  }

  onSearchChange(e) {
    const searchTerm = e.target.value
    this.props.actions.setSearchTerm(searchTerm)
  }
  
  doSearch(e) {
    if (e) { e.preventDefault() }
    fetch(
      `http://api.tvmaze.com/search/shows?q=${encodeURI(this.props.search.searchTerm)}`,
      {mode: 'cors'}
    )
      .then(res => res.json())
      .then(data => this.props.actions.setShows(data))
      .catch(() =>  this.props.actions.setShows([]))
  }


  render () {
    return (
      <div>
        <Header doSearch={this.doSearch} onSearchChange={this.onSearchChange}/>
        {this.props.shows.data.length && <List shows={ this.props.shows.data }/>}
        {
          !this.props.shows.data.length && 
          <div style={{display: 'flex', justifyContent: 'center', marginTop:'50px' }}> Nothing yet</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows,
    search: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions.shows, ...actions.search }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyApp)