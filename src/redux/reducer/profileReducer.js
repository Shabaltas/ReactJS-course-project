import {actionTypes} from "../actionTypes";

const initialState = {
    posts: [
        {id: 1, msg: "How r u all", likes: 12},
        {id: 2, msg: "LOL", likes: 0},
        {id: 3, msg: "dead", likes: 2},
        {id: 4, msg: "...", likes: 1}
    ],
    changeablePostMsg: ''
};

function addPost(state) {
    state.posts.push({
        id: 5,
        msg: state.changeablePostMsg,
        likes: 0
    });
    state.changeablePostMsg = '';
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            addPost(state);
            break;
        case actionTypes.UPDATE_NEW_POST_TXT:
            state.changeablePostMsg = action.newText;
            break;
    }
    return state;
};

export default profileReducer;