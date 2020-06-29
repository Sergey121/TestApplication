import { Record } from '../models/index';

type State = Record[];
type Action = {
  type: string;
  payload: any;
};

export const initialState = JSON.parse(window.localStorage.getItem('records')) || [];

export function reducer(state: State, action: Action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
