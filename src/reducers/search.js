import * as searchActions from '../actions/search'
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case searchActions.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm }
    default:
      return state
  }
}
