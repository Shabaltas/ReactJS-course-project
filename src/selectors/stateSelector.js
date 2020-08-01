import {createSelector} from "reselect";

const getDialogsData = (state) => state.dialogsPage;

const getLogin = (state) => state.auth.login;

const getIsAuth = (state) => state.auth.isAuth;

const getFriends = (state) => state.navbar.friends;

const getProfile = (state) => state.profilePage.profile;

const getPosts = (state) => state.profilePage.posts;

const getProfileStatus = (state) => state.profilePage.status;

const getAuthorizedId = (state) => state.auth.userId;

const getUsers = (state) => {
    return state.usersPage.users;
};

const getReselectedUsers = createSelector(getUsers, (users) => {
    return users.filter(u => true)
});

const getUsersTotalCount = (state) => state.usersPage.totalCount;

const getCurrentPage = (state) => state.usersPage.currentPage;

const getPageSize = (state) => state.usersPage.pageSize;

const getIsFetching = (state) => state.usersPage.isFetching;
//for disabling btn "FOLLOW/UNFOLLOW" while in progress
const getFollowingUsers = (state) => state.usersPage.following;

const getCaptchaUrl = (state) => state.auth.captchaUrl;

export {
    getDialogsData, getIsAuth, getLogin,
    getFriends, getProfile, getPosts,
    getProfileStatus, getAuthorizedId,
    getCurrentPage, getFollowingUsers,
    getIsFetching, getPageSize, getUsers,
    getUsersTotalCount, getCaptchaUrl
}
