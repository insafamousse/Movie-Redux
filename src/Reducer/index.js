import {combineReducers} from 'redux';
import ratingFilterReducer from './Rating2';
import titleFilterReducer from './Title';
import MovieListReducer from './MovieListReducer';

export default combineReducers({ratingFilterReducer,
  titleFilterReducer,MovieListReducer})
