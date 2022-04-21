import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as champAPI from '../lib/api/champ';
import { takeLatest } from '@redux-saga/core/effects';

const [CHAMP_SEARCH, CHAMP_SEARCH_SUCCESS, CHAMP_SEARCH_FAILURE] =
  createRequestActionTypes('champ/CHAMP_SEARCH');

export const champSearch = createAction(CHAMP_SEARCH, (id) => id);

const champSearchSaga = createRequestSaga(
  CHAMP_SEARCH,
  champAPI.summonerByNameSearch,
);

export function* champSaga() {
  yield takeLatest(CHAMP_SEARCH, champSearchSaga);
}

const initialState = {
  champInfo: '',
  error: {
    champInfoError: null,
  },
};

const champ = handleActions(
  {
    [CHAMP_SEARCH_SUCCESS]: (state, { payload: value }) => ({
      ...state,
      champInfo: value,
    }),
    [CHAMP_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: {
        ...state.error,
        champInfoError: error,
      },
    }),
  },
  initialState,
);

export default champ;
