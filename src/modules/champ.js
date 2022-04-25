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
const [
  CHAMP_INFO_SEARCH,
  CHAMP_INFO_SEARCH_SUCCESS,
  CHAMP_INFO_SEARCH_FAILURE,
] = createRequestActionTypes('champ/CHAMP_INFO');

export const champSearch = createAction(CHAMP_SEARCH);
export const loationsChamp = createAction(LOATATIONS_CHAMP);
export const champInfoSearch = createAction(CHAMP_INFO_SEARCH, (id) => id);

const champSearchSaga = createRequestSaga(
  CHAMP_SEARCH,
  champAPI.championSearch,
);
const lotaionsChampSaga = createRequestSaga(
  LOATATIONS_CHAMP,
  champAPI.championLotaionsSearch,
);
const champInfoSearchSaga = createRequestSaga(
  CHAMP_INFO_SEARCH,
  champAPI.championSearch,
);

export function* champSaga() {
  yield takeLatest(CHAMP_SEARCH, champSearchSaga);
  yield takeLatest(LOATATIONS_CHAMP, lotaionsChampSaga);
  yield takeLatest(CHAMP_INFO_SEARCH, champInfoSearchSaga);
}

const initialState = {
  champList: {},
  champInfo: {},
  loationsChamps: {},
  error: {
    champListError: null,
    loationsChampError: null,
    champInfoError: null,
  },
};

const champ = handleActions(
  {
    [CHAMP_SEARCH_SUCCESS]: (state, { payload: champList }) => ({
      ...state,
      champList,
    }),
    [CHAMP_SEARCH_FAILURE]: (state, { payload: champListError }) => ({
      ...state,
      error: {
        ...state.error,
        champListError,
      },
    }),
    [LOATATIONS_CHAMP_SUCCESS]: (state, { payload: loationsChamps }) => ({
      ...state,
      loationsChamps,
    }),
    [LOATATIONS_CHAMP_FAILURE]: (state, { payload: loationsChampError }) => ({
      ...state,
      error: {
        ...state.error,
        loationsChampError,
      },
    }),
    [CHAMP_INFO_SEARCH_SUCCESS]: (state, { payload: champInfo }) => ({
      ...state,
      champInfo,
    }),
    [CHAMP_INFO_SEARCH_FAILURE]: (state, { payload: champInfoError }) => ({
      ...state,
      error: {
        ...state.error,
        champInfoError,
      },
    }),
  },
  initialState,
);

export default champ;
