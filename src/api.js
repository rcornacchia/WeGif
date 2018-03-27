const API_KEY = 'LoLdNFKGPqzUACDuc7dTvK9fvHtCLsFB';

export const searchGiphy = query =>
  fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${API_KEY}&limit=5`)
  .then(res => res.json())
  .then(res => console.log(res));