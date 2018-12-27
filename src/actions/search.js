export const SET_SEARCH_TERM = 'SEARCH/SET_SEARCH_TERM';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  };
}
