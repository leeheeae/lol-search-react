import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as summonerAPI from '../lib/api/summoner';
import { takeLatest } from '@redux-saga/core/effects';

const CHANGE_FIELD = 'summoner/CHANGE_FIELD';
const SUMMONER_REAGUE_CLEAR = 'summoner/SUMMONER_REAGUE_CLEAR';

const [SUMMONER_SEARCH, SUMMONER_SEARCH_SUCCESS, SUMMONER_SEARCH_FAILURE] =
  createRequestActionTypes('summoner/SUMMONER_SEARCH');
const [SUMMONER_REAGUE, SUMMONER_REAGUE_SUCCESS, SUMMONER_REAGUE_FAILURE] =
  createRequestActionTypes('summoner/SUMMONER_REAGUE');

export const changeField = createAction(CHANGE_FIELD, ({ value }) => ({
  value,
}));
export const summonerSearch = createAction(SUMMONER_SEARCH, (name) => name);
export const summonerReague = createAction(
  SUMMONER_REAGUE,
  (summonerId) => summonerId,
);
export const summonerReagueClear = createAction(SUMMONER_REAGUE_CLEAR);

const summonerSearchSaga = createRequestSaga(
  SUMMONER_SEARCH,
  summonerAPI.summonerByNameSearch,
);
const summonerLeagueSaga = createRequestSaga(
  SUMMONER_REAGUE,
  summonerAPI.summonerLeague,
);

export function* summonerSaga() {
  yield takeLatest(SUMMONER_SEARCH, summonerSearchSaga);
  yield takeLatest(SUMMONER_REAGUE, summonerLeagueSaga);
}

const initialState = {
  summonerInput: '',
  summoner: null,
  summonerReague: [],
  error: null,
};

const summoner = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
      ...state,
      summonerInput: value,
    }),
    [SUMMONER_SEARCH]: (state) => ({
      ...state,
      summonerInput: '',
    }),
    [SUMMONER_SEARCH_SUCCESS]: (state, { payload: summoner }) => ({
      ...state,
      summoner,
    }),
    [SUMMONER_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SUMMONER_REAGUE_SUCCESS]: (state, { payload: summonerReague }) => ({
      ...state,
      summonerReague,
    }),
    [SUMMONER_REAGUE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SUMMONER_REAGUE_CLEAR]: (state) => ({
      ...state,
      summonerReague: [],
    }),
  },
  initialState,
);

export default summoner;
