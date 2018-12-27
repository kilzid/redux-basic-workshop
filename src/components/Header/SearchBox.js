import React from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends React.Component {
  
  static propTypes = {
    doSearch: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      const { doSearch } = this.props
      doSearch(e)
    }
  }

  render() {
    return (
      <form onSubmit={this.props.doSearch}>
        <input
          className="input"
          type="text"
          placeholder="Search for a show"
          onChange={this.props.onSearchChange}
          onKeyDown={this.onKeyDown}
        />
        <input type="submit" value="SEARCH" />
      </form>
    )
  }
}