import { Record } from '../models/index';

type State = Record[];
type Action = {
  type: string;
  payload?: any;
};

const KEY = 'records';

export const initialState = JSON.parse(window.localStorage.getItem(KEY)) || [];

const ADD_RECORD = '';
const EDIT_RECORD = '';
const REMOVE_RECORD = '';

export function reducer(state: State, action: Action) {
  let newState = state;
  switch (action.type) {
    case ADD_RECORD: {
      const newRecord = {
        ...action.payload,
        id: Date.now(),
      };
      newState = [
        ...state,
        newRecord,
      ];
      break;
    }
    case REMOVE_RECORD: {
      newState = state.filter(i => i.id !== action.payload.id);
      break;
    }
    case EDIT_RECORD: {
      const index = state.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1, action.payload);
        newState = [
          ...state,
        ];
      } else {
        newState = state;
      }
      break;
    }
    default: {

    }
  }

  window.localStorage.setItem(KEY, JSON.stringify(newState));
  return newState;
}

export const addRecord = (item: Record): Action => {
  return {
    type: ADD_RECORD,
    payload: item,
  };
};

export const editRecord = (item: Record): Action => {
  return {
    type: EDIT_RECORD,
    payload: item,
  };
};

export const removeRecord = (item: Record): Action => {
  return {
    type: REMOVE_RECORD,
    payload: item,
  };
};
