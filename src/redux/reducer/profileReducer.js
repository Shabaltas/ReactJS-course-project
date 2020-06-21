import actionTypes from "../actionTypes";

const initialState = {
    posts: [
        {id: 1, msg: "How r u all", likes: 12},
        {id: 2, msg: "LOL", likes: 0},
        {id: 3, msg: "dead", likes: 2},
        {id: 4, msg: "...", likes: 1}
    ],
    changeablePostMsg: '',
    profile: null,
    isFetching: false
};

function addPost(state) {
    return {
        ...state,
        posts: [...state.posts, {
            id: 5,
            msg: state.changeablePostMsg,
            likes: 0
        }],
        changeablePostMsg: ''
    };
}

function updateNewPostTxt(state, newTxt) {
    return {
        ...state,
        changeablePostMsg: newTxt
    };
}

function setProfile(state, profile) {
    return {
        ...state,
        profile
    };
}

function toggleIsFetching(state, isFetching) {
    return {
        ...state,
        isFetching
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return addPost(state);
        case actionTypes.UPDATE_NEW_POST_TXT:
            return updateNewPostTxt(state, action.newText);
        case actionTypes.SET_PROFILE:
            return setProfile(state, action.profile);
        case actionTypes.TOGGLE_IS_FETCHING:
            return toggleIsFetching(state, action.isFetching);
        default:
            return state;
    }
};

export default profileReducer;
