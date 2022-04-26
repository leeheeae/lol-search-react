import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import loading from './loading';
import summoner, { summonerSaga } from './summoner';
import champ, { champSaga } from './champ';
import spell, { spellSaga } from './spell';
import match, { matchSaga } from './match';

const rootReducer = combineReducers({
  loading,
  summoner,
  champ,
  spell,
  match,
});

export function* rootSaga() {
  yield all([summonerSaga(), champSaga(), spellSaga(), matchSaga()]);
}

export default rootReducer;
