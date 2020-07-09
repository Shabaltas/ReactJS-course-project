import { getAuthUser } from "./authReducer";

const initialState = {
    initialized: false
};

const INITIALIZED_SUCCESSFULLY = "app/INITIALIZED_SUCCESSFULLY";

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export function onInitializedAction() {
    return {
        type: INITIALIZED_SUCCESSFULLY
    }
}

export function initializeApp() {
    return async dispatch => {
        await dispatch(getAuthUser());
        dispatch(onInitializedAction());
    }
}