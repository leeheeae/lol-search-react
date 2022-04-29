import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as spellAPI from '../lib/api/spell';
import { takeLatest } from '@redux-saga/core/effects';

const [SPELL_SEARCH, SPELL_SEARCH_SUCCESS, SPELL_SEARCH_FAILURE] =
  createRequestActionTypes('spell/SPELL_SEARCH');

export const spellSearch = createAction(SPELL_SEARCH);

const spellSearchSaga = createRequestSaga(SPELL_SEARCH, spellAPI.spellSearch);

export function* spellSaga() {
  yield takeLatest(SPELL_SEARCH, spellSearchSaga);
}

const initialState = {
  spellInfo: '',
  error: {
    spellDataEror: null,
    itemDataError: null,
  },
};

const spell = handleActions(
  {
    [SPELL_SEARCH_SUCCESS]: (state, { payload: spellInfo }) => ({
      ...state,
      spellInfo,
    }),
    [SPELL_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: {
        ...state.error,
        spellDataEror: error,
      },
    }),
  },
  initialState,
);

export default spell;
