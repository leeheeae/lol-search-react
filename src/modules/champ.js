import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as champAPI from '../lib/api/champ';
import { takeLatest } from '@redux-saga/core/effects';

const [CHAMP_SEARCH, CHAMP_SEARCH_SUCCESS, CHAMP_SEARCH_FAILURE] =
  createRequestActionTypes('champ/CHAMP_SEARCH');
const [LOATATIONS_CHAMP, LOATATIONS_CHAMP_SUCCESS, LOATATIONS_CHAMP_FAILURE] =
  createRequestActionTypes('champ/LOATATIONS_CHAMP');

export const champSearch = createAction(CHAMP_SEARCH, (id) => id);
export const loationsChamp = createAction(LOATATIONS_CHAMP);

const champSearchSaga = createRequestSaga(
  CHAMP_SEARCH,
  champAPI.summonerByNameSearch,
);
const lotaionsChampSaga = createRequestSaga(
  LOATATIONS_CHAMP,
  champAPI.championLotaionsSearch,
);

export function* champSaga() {
  yield takeLatest(CHAMP_SEARCH, champSearchSaga);
  yield takeLatest(LOATATIONS_CHAMP, lotaionsChampSaga);
}

const initialState = {
  champInfo: '',
  loationsChamps: '',
  error: {
    champInfoError: null,
    loationsChampError: null,
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
    [LOATATIONS_CHAMP_SUCCESS]: (state, { payload: loationsChamps }) => ({
      ...state,
      loationsChamps,
    }),
    [LOATATIONS_CHAMP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: {
        ...state.error,
        loationsChampError: error,
      },
    }),
  },
  initialState,
);

export default champ;
