import * as actions from '../actionTypes';

const initialState = {
  searches: {},
  history: [],
  current: null
}

function rootReducer(state=initialState, { type, query, data }) {
  switch (type) {
    case actions.FETCH_TRENDING_SUCCESS: {
      const history = state.history.slice();
      history.push('trending');

      return {
        ...state,
        history,
        current: 'trending',
        searches: {
          ...state.searches,
          'trending': data
        }
      }
    }

    case actions.SEARCH_GIPHY: {
      // shallow copy of state is acceptable because array is only 1 level deep.
      const history = state.history.slice();
      const index = history.indexOf(query);

      // remove query from history so it can be reinserted to the top
      if (index > -1) {
        history.splice(index, 1)
      }

      // push query onto top of history
      history.push(query);

      return {
        ...state,
        current: query,
        history
      }
    }

    case actions.SEARCH_GIPHY_SUCCESS: {
      return {
        ...state,
        searches: {
          ...state.searches,
          [query]: data
        }
      }
    }

    default:
      return state;
  }
}

export default rootReducer;