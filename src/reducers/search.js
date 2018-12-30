import * as searchActions from '../actions/search'
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case searchActions.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm }
    case searchActions.SET_IS_SEARCHING:
      return { ...state, isSearching: action.isSearching }
    default:
      return state
  }
}
