import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import loading from './loading';
import summoner, { summonerSaga } from './summoner';
import champ, { champSaga } from './champ';
import spell, { spellSaga } from './spell';

const rootReducer = combineReducers({
  loading,
  summoner,
  champ,
  spell,
});

export function* rootSaga() {
  yield all([summonerSaga(), champSaga(), spellSaga()]);
}

export default rootReducer;
