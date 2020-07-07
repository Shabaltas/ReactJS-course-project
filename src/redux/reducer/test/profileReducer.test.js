import React from "react";
import actionCreator from "../../actionCreator";
import profileReducer from "../profileReducer";

const initialState = {
    posts: [
        {id: 1, msg: "How r u all", likes: 12},
        {id: 2, msg: "LOL", likes: 0},
        {id: 3, msg: "dead", likes: 2},
        {id: 4, msg: "...", likes: 1}
    ]
};

test('add post', () => {
    const newPostText = "NEW POST";
    const action = actionCreator.onAddPost(newPostText);
    const state = profileReducer(initialState, action);
    expect(state.posts.length).toBe(5);
});

test('add post exactly', () => {
    const newPostText = "NEW POST";
    const action = actionCreator.onAddPost(newPostText);
    const state = profileReducer(initialState, action);
    expect(state.posts).toStrictEqual([
        {id: 1, msg: "How r u all", likes: 12},
        {id: 2, msg: "LOL", likes: 0},
        {id: 3, msg: "dead", likes: 2},
        {id: 4, msg: "...", likes: 1},
        {id: 5, msg: newPostText, likes: 0}
    ]);
});

test('delete post', () => {
    const action = actionCreator.onDeletePost(4);
    const state = profileReducer(initialState, action);
    expect(state.posts.length).toBe(3);
});

test('delete post exactly', () => {
    const action = actionCreator.onDeletePost(4);
    const state = profileReducer(initialState, action);
    expect(state.posts).toStrictEqual([
            {id: 1, msg: "How r u all", likes: 12},
            {id: 2, msg: "LOL", likes: 0},
            {id: 3, msg: "dead", likes: 2}
    ]);
});