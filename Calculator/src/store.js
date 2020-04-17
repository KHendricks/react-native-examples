// Template for a redux store

import { createStore } from "redux";

const initialState = {
    // What is displayed on the screen
    calculatorDisplay: "",

    // Stacks to calulate the display
    calculatorStack: "0",
    prevStack: "",
    operator: "",
};

const APPEND = "APPEND";
const EQUALS = "EQUALS";
const ADD = "ADD";
const MINUS = "MINUS";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
const INVERT = "INVERT";
const PERCENTAGE = "PERCENTAGE";
const CLEAR = "CLEAR";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case APPEND:
            if (state.calculatorStack.includes(".") && action.value == ".") {
                return state;
            } else if (state.calculatorStack === "0" && action.value === "0") {
                return state;
            } else if (state.calculatorStack === "0") {
                return {
                    ...state,
                    calculatorStack: action.value,
                };
            } else {
                return {
                    ...state,
                    calculatorStack: state.calculatorStack + action.value,
                };
            }
        case EQUALS:
            if (state.operator === "+") {
                return {
                    ...state,
                    calculatorStack: (
                        parseInt(state.prevStack) +
                        parseInt(state.calculatorStack)
                    ).toString(),
                    prevStack: "",
                    operator: "",
                };
            } else if (state.operator === "-") {
                return {
                    ...state,
                    calculatorStack: (
                        parseInt(state.prevStack) -
                        parseInt(state.calculatorStack)
                    ).toString(),
                    prevStack: "",
                    operator: "",
                };
            } else if (state.operator === "/") {
                return {
                    ...state,
                    calculatorStack: (
                        parseInt(state.prevStack) /
                        parseInt(state.calculatorStack)
                    ).toString(),
                    prevStack: "",
                    operator: "",
                };
            } else if (state.operator === "*") {
                return {
                    ...state,
                    calculatorStack: (
                        parseInt(state.prevStack) *
                        parseInt(state.calculatorStack)
                    ).toString(),
                    prevStack: "",
                    operator: "",
                };
            } else {
                return state;
            }
        case ADD:
            return {
                ...state,
                prevStack:
                    state.calculatorStack === ""
                        ? state.prevStack
                        : state.calculatorStack,
                calculatorStack: "",
                operator: "+",
            };
        case MINUS:
            return {
                ...state,
                prevStack:
                    state.calculatorStack === ""
                        ? state.prevStack
                        : state.calculatorStack,
                calculatorStack: "",
                operator: "-",
            };
        case MULTIPLY:
            return {
                ...state,
                prevStack:
                    state.calculatorStack === ""
                        ? state.prevStack
                        : state.calculatorStack,
                calculatorStack: "",
                operator: "*",
            };
        case DIVIDE:
            return {
                ...state,
                prevStack:
                    state.calculatorStack === ""
                        ? state.prevStack
                        : state.calculatorStack,
                calculatorStack: "",
                operator: "/",
            };
        case INVERT:
            return {
                ...state,
                calculatorStack:
                    state.calculatorStack[0] === "-"
                        ? state.calculatorStack.slice(1)
                        : "-" + state.calculatorStack,
            };
        case PERCENTAGE:
            return { ...state, calculatorStack: state.calculatorStack / 100 };
        case CLEAR:
            return {
                ...state,
                calculatorStack: "0",
            };
        default:
            return state;
    }
};

export default createStore(reducer);
