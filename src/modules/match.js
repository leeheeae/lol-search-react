import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as matchAPI from '../lib/api/match';

// matchByPuuid
const [MATCH_BY_PUUID, MATCH_BY_PUUID_SUCCESS, MATCH_BY_PUUID_FAILURE] =
  createRequestActionTypes('match/MATCH_BY_PUUID');

export const matchByPuuid = createAction(
  MATCH_BY_PUUID,
  (puuid, queue, type) => [puuid, queue, type],
);

const matchByPuuidSaga = createRequestSaga(
  MATCH_BY_PUUID,
  matchAPI.matchByPuuid,
);

export function* matchSaga() {
  yield takeLatest(MATCH_BY_PUUID, matchByPuuidSaga);
}

const initialState = {
  matchIdList: {},
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
  },
  initialState,
);

export default match;
