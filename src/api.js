// api key should stored in a secrets manager like vault
const API_KEY = 'LoLdNFKGPqzUACDuc7dTvK9fvHtCLsFB';
const GIPHY_URL = 'http://api.giphy.com/v1/gifs';

export const searchGiphy = query =>
  fetch(`${GIPHY_URL}/search?q=${query}&api_key=${API_KEY}&limit=15`)
    .then(res => res.json());

export const fetchTrending = query =>
  fetch(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
    .then(res => res.json());
  