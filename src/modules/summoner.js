import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as summonerAPI from '../lib/api/summoner';
import { takeLatest } from '@redux-saga/core/effects';

const [SUMMONER_SEARCH, SUMMONER_SEARCH_SUCCESS, SUMMONER_SEARCH_FAILURE] =
  createRequestActionTypes('summoner/SUMMONER_SEARCH');

export const summonerSearch = createAction(SUMMONER_SEARCH, (name) => name);

const summonerSearchSaga = createRequestSaga(
  SUMMONER_SEARCH,
  summonerAPI.summonerByNameSearch
);
export function* summonerSaga() {
  yield takeLatest(SUMMONER_SEARCH, summonerSearchSaga);
}

const initialState = {
  summoner: null,
  error: null,
};

const summoner = handleActions(
  {
    [SUMMONER_SEARCH_SUCCESS]: (state, { payload: summoner }) => ({
      ...state,
      summoner,
    }),
    [SUMMONER_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default summoner;
