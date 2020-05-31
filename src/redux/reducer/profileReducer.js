import {actionTypes} from "../actionTypes";

function addPost(state) {
    state.posts.push({
        id: 5,
        msg: state.changeablePostMsg,
        likes: 0
    });
    state.changeablePostMsg = '';
}

const profileReducer = (state, action) => {
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