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
    let copyState = {...state};
    copyState.posts = [...state.posts];
    copyState.posts.push({
        id: 5,
        msg: state.changeablePostMsg,
        likes: 0
    });
    copyState.changeablePostMsg = '';
    return copyState;
}

function updateNewPostTxt(state, newTxt) {
    let copyState = {...state};
    copyState.changeablePostMsg = newTxt;
    return copyState;
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return addPost(state);
        case actionTypes.UPDATE_NEW_POST_TXT:
            return updateNewPostTxt(state, action.newText);
    }
    return state;
};

export default profileReducer;