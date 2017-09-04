import { setEntries, next, vote, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    setEntries(state, action.entries);
    break;
  case 'NEXT':
    next(state);
    break;
  case 'VOTE':
    vote(state, action.entry);
    break;
  }
  return state;
}