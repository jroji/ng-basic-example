import {ActionReducer, Action} from "@ngrx/store";
import { State, initialState } from './main.state';

export const mainReducer: ActionReducer<State> = (state = initialState, action: Action) => {
    switch (action.type) {
      case 'INCREMENT': {
        return {
          counter: state.counter + action['payload']
        }
      }
      case 'EVENT_FROM_EFFECT': {
        return {
          counter: 4
        }
      }
      default: {
        return state;
      }
    }
  };