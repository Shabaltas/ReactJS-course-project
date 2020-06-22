import * as axios from "axios";
import configs from "../configs";

const apiInstance = axios.create({
    withCredentials: true,
    headers: {
        "api-key": "1b44dd06-2645-4fda-bc7a-6c8f3e5f9b32"
    },
    baseURL: configs.apiUrl
});

const api = {
    authMe() {
        return apiInstance.get(configs.apiAuthMeEndpoint).then(resp => resp.data);
    },
    getUsers(page, pageSize) {
        return apiInstance.get(`${configs.apiUsersEndpoint}?page=${page}&count=${pageSize}`)
            .then(res => res.data);
    },
    followUser(userId) {
        return apiInstance.post(`${configs.apiFollowEndpoint}/${userId}`)
            .then(res => res.data);
    },
    unfollowUser(userId) {
        return apiInstance.delete(`${configs.apiFollowEndpoint}/${userId}`)
            .then(res => res.data);
    },
    getProfileInfo(userId){
        return apiInstance.get(`${configs.apiProfileEndpoint}/${userId ? userId : 2}`)
            .then(res => res.data);
    },
    getProfileStatus(userId) {
        return apiInstance.get(`${configs.apiProfileEndpoint}/status/${userId ? userId : 2}`)
            .then(res => res.data);
    },
    //TODO updates MY STATUS
    updateProfileStatus(status) {
        return apiInstance.put(`${configs.apiProfileEndpoint}/status`, {status})
            .then(res => res.data);
    }
};

export default api;
