export const SET_SHOWS = 'SHOWS/SET_SHOWS';

export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows,
  };
}
