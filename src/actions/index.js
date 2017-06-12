// import axios from 'axios';

export const FETCH_SEARCH_RESULTS = 'fetch_search_results';

// const ROOT_URL = 'http://herokuapp.com/';

export function fetchSearchResults(term, location) {
  // const request = axios.get(`${ROOT_URL}/${term}/${location}`);

  const testJSON = { 
    data: [ 
            { name: 'Michael Mina', url: 'yelp.com/michaelminna' },
            { name: 'Michael Mina', url: 'yelp.com/michaelminna' },
            { name: 'Michael Mina', url: 'yelp.com/michaelminna' },
            { name: 'Michael Mina', url: 'yelp.com/michaelminna' } 
          ] 
  };

  return {
    type: FETCH_SEARCH_RESULTS,
    payload: testJSON
  }
}
