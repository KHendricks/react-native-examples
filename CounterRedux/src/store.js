// Template for a redux store

import { createStore } from "redux";

const initialState = {
    counter: 0,
};

const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + 1 };
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - 1 };
        case RESET_COUNTER:
            return { ...state, counter: 0 };
        default:
            return state;
    }
};

export default createStore(reducer);
