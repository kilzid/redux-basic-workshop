import * as showsActions from '../actions/shows'
export default function reducer(state = { data: [] }, action = {}) {
  switch (action.type) {
    case showsActions.SET_SHOWS:
      return { ...state, data: action.shows }
    default:
      return state
  }
}
