import actionTypes from "../actionTypes";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIALIZED_SUCCESSFULLY:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export default appReducer;
