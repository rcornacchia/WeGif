import { SEARCH_GIPHY, FETCH_TRENDING } from './actionTypes';

export const searchGiphy = query => ({ type: SEARCH_GIPHY, query });
export const fetchTrending = () => ({ type: FETCH_TRENDING });