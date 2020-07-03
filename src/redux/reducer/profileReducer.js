import actionTypes from "../actionTypes";

const initialState = {
    posts: [
        {id: 1, msg: "How r u all", likes: 12},
        {id: 2, msg: "LOL", likes: 0},
        {id: 3, msg: "dead", likes: 2},
        {id: 4, msg: "...", likes: 1}
    ],
    profile: null,
    status: '',
    isFetching: false
};

function addPost(state, newPost) {
    return {
        ...state,
        posts: [...state.posts, {
            id: 5,
            msg: newPost,
            likes: 0
        }]
    };
}

function setProfile(state, profile, status) {
    return {
        ...state,
        profile,
        status
    };
}

function setStatus(state, status) {
    return {
        ...state,
        status
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
            return addPost(state, action.newPost);
        case actionTypes.SET_PROFILE:
            return setProfile(state, action.profile, action.status);
        case actionTypes.TOGGLE_IS_FETCHING:
            return toggleIsFetching(state, action.isFetching);
        case actionTypes.UPDATE_PROFILE_STATUS:
            return setStatus(state, action.status);
        default:
            return state;
    }
};

export default profileReducer;
