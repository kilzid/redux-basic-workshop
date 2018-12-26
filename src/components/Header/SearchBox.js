import React from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends React.Component {
  
  static propTypes = {
    doSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.state = {
      searchTerm: '',
    }
  }

  onSearchChange(e) {
    const searchTerm = e.target.value;
    this.setState((state, props) => ({
      searchTerm 
    }))
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.doSearch(e);
    }
  }

  doSearch(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { doSearch } = this.props;
    doSearch(searchTerm);
    
  }
  render() {
    return (
      <form onSubmit={this.doSearch}>
        <input
          className="input"
          type="text"
          placeholder="Search for a show"
          onChange={this.onSearchChange}
          onKeyDown={this.onKeyDown}
        />
        <input type="submit" value="SEARCH" />
      </form>
    )
  }
}