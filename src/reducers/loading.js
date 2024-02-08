import { START_LOADING } from "../actions/loading";
import { STOP_LOADING } from "../actions/loading";

export default function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
