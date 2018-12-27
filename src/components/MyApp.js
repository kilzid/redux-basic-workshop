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
    this.state = {
      searchTerm: '',
    }
  }

  componentDidMount() {
    this.setState((state, props) => ({
      searchTerm: 'Oath'
    }), () => this.doSearch())
  }

  onSearchChange(e) {
    const searchTerm = e.target.value
    this.setState((state, props) => ({
      searchTerm
    }), () => console.log('this.state: ', this.state))
  }
  
  doSearch(e) {
    if (e) { e.preventDefault() }
    const { searchTerm } = this.state
    console.log('this.state', this.state)
    console.log('searchTerm', searchTerm)
    fetch(
      `http://api.tvmaze.com/search/shows?q=${encodeURI(searchTerm)}`,
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions.SHOWS }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyApp)