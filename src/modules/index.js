import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import loading from './loading';
import summoner, { summonerSaga } from './summoner';
import champ, { champSaga } from './champ';

const rootReducer = combineReducers({
  loading,
  summoner,
  champ,
});

export function* rootSaga() {
  yield all([summonerSaga(), champSaga()]);
}

export default rootReducer;
