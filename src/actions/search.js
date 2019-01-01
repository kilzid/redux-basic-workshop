export const SET_SEARCH_TERM = 'SEARCH/SET_SEARCH_TERM'
export const SET_IS_SEARCHING = 'SEARCH/SET_IS_SEARCHING'
import * as showsAction from './shows'

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  }
}

export function setIsSearching(isSearching) {
  return {
    type: SET_IS_SEARCHING,
    isSearching,
  }
}

export function fetchShows() {
  return (dispatch, getState) => {
    dispatch(setIsSearching(true))
    const searchTerm = getState().search.searchTerm
    fetch(`http://api.tvmaze.com/search/shows?q=${encodeURI(searchTerm)}`, { mode: 'cors' })
      .then(res => res.json())
      .then(data => dispatch(showsAction.setShows(data)))
      .catch(() => dispatch(showsAction.setShows([])))
      .finally(() => dispatch(setIsSearching(false)))
  }
}
