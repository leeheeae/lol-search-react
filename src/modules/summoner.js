import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as summonerAPI from '../lib/api/summoner';
import * as iconAPI from '../lib/api/icon';
import { takeLatest } from '@redux-saga/core/effects';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';

const [SUMMONER_SEARCH, SUMMONER_SEARCH_SUCCESS, SUMMONER_SEARCH_FAILURE] =
  createRequestActionTypes('summoner/SUMMONER_SEARCH');
const [
  SUMMONER_PROFILE_ICON,
  SUMMONER_PROFILE_ICON_SUCCESS,
  SUMMONER_PROFILE_ICON_FAILURE,
] = createRequestActionTypes('summoner/SUMMONER_PROFILE_ICON');

export const changeField = createAction(CHANGE_FIELD, ({ value }) => ({
  value,
}));
export const summonerSearch = createAction(SUMMONER_SEARCH, (name) => name);
export const summonerProfileIcon = createAction(
  SUMMONER_PROFILE_ICON,
  (iconid) => iconid
);

const summonerSearchSaga = createRequestSaga(
  SUMMONER_SEARCH,
  summonerAPI.summonerByNameSearch
);
const summonerProfileIconSaga = createRequestSaga(
  SUMMONER_SEARCH,
  iconAPI.summonerIcon
);

export function* summonerSaga() {
  yield takeLatest(SUMMONER_SEARCH, summonerSearchSaga);
  yield takeLatest(SUMMONER_PROFILE_ICON, summonerProfileIconSaga);
}

const initialState = {
  summonerInput: '',
  summoner: null,
  summonerIcon: '',
  error: null,
};

const summoner = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { value } }) => ({
      ...state,
      summonerInput: value,
    }),
    [SUMMONER_SEARCH_SUCCESS]: (state, { payload: summoner }) => ({
      ...state,
      summoner,
    }),
    [SUMMONER_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SUMMONER_PROFILE_ICON_SUCCESS]: (state, { payload: summonerIcon }) => ({
      ...state,
      summonerIcon,
    }),
    [SUMMONER_PROFILE_ICON_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default summoner;
