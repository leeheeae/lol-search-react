import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as matchAPI from '../lib/api/match';

// matchByPuuid
const MATCH_BY_CLEAR = 'math/MATCH_BY_CLEAR';
const [MATCH_BY_PUUID, MATCH_BY_PUUID_SUCCESS, MATCH_BY_PUUID_FAILURE] =
  createRequestActionTypes('match/MATCH_BY_PUUID');
const [
  MATCH_BY_MATCH_ID,
  MATCH_BY_MATCH_ID_SUCCESS,
  MATCH_BY_MATCH_ID_FAILURE,
] = createRequestActionTypes('match/MATCH_BY_MATCH_ID');

export const matchByClear = createAction(MATCH_BY_CLEAR);
export const matchByPuuid = createAction(MATCH_BY_PUUID, (data) => data);

export const matchByMatchId = createAction(
  MATCH_BY_MATCH_ID,
  (matchId) => matchId,
);

const matchByPuuidSaga = createRequestSaga(
  MATCH_BY_PUUID,
  matchAPI.matchByPuuid,
);

const matchByMatchIdSaga = createRequestSaga(
  MATCH_BY_MATCH_ID,
  matchAPI.matchByMatchId,
);

export function* matchSaga() {
  yield takeLatest(MATCH_BY_PUUID, matchByPuuidSaga);
  yield takeLatest(MATCH_BY_MATCH_ID, matchByMatchIdSaga);
}

const initialState = {
  matchIdList: null,
  matchByMatchIdList: null,
  error: null,
};

const match = handleActions(
  {
    [MATCH_BY_PUUID_SUCCESS]: (state, { payload: matchIdList }) => ({
      ...state,
      matchIdList,
    }),
    [MATCH_BY_PUUID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [MATCH_BY_MATCH_ID_SUCCESS]: (state, { meta: matchByMatchIdList }) => ({
      ...state,
      matchByMatchIdList,
    }),
    [MATCH_BY_MATCH_ID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [MATCH_BY_CLEAR]: (state) => ({
      ...state,
      matchIdList: null,
      matchByMatchIdList: null,
    }),
  },
  initialState,
);

export default match;
