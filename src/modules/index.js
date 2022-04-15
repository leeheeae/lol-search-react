import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import loading from './loading';
import summoner, { summonerSaga } from './summoner';

const rootReducer = combineReducers({
  loading,
  summoner,
});

export function* rootSaga() {
  yield all([summonerSaga()]);
}

export default rootReducer;
