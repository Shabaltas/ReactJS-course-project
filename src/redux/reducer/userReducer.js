import {actionTypes} from "../actionTypes";
import ava1 from "../../resources/ava1.jpg";
import ava2 from "../../resources/ava2.jpg";
import ava3 from "../../resources/ava3.jpg";

const initialState = {
    users: [
        {id: 1, name: 'Artyom', country: 'Belarus', followed: true, photo: ava1},
        {id: 2, name: 'Nastya', country: 'Russia', followed: false, photo: ava2},
        {id: 3, name: 'Igor', country: 'Germany', followed: true, photo: ava3},
    ],
};

function follow(state, userId) {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? {...user, followed: true} : {...user})
    };
}

function unfollow(state, userId) {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? {...user, followed: false} : {...user})
    };
}

function setUsers(state, users) {
    return {
        users: [...state.users, users]
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FOLLOW:
            return follow(state, action.userId);
        case actionTypes.UNFOLLOW:
            return unfollow(state, action.userId);
        case actionTypes.SET_USERS:
            return setUsers(state, action.users);
    }
    return state;
};

export default usersReducer;