import { Record } from '../models/index';

type State = Record[];
type Action = {
  type: string;
  payload?: any;
};

export const initialState = JSON.parse(window.localStorage.getItem('records')) || [];

const ADD_RECORD = '';
const EDIT_RECORD = '';
const REMOVE_RECORD = '';

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ADD_RECORD: {
      const newRecord = {
        ...action.payload,
        id: Date.now(),
      };
      return [
        ...state,
        newRecord,
      ];
    }
    case REMOVE_RECORD: {
      const newState = state.filter(i => i.id !== action.payload.id);
      return newState;
    }
    case EDIT_RECORD: {
      const index = state.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1, action.payload);
        return [
          ...state,
        ];
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
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
