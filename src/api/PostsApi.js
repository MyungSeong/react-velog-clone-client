import { ApiManager } from '@lib';
import { API_URL } from '@constants/Config';

const $http = new ApiManager();

export const addPost = (data) => {
    const url = `${API_URL}/posts/add`;

    /* $http.setHeader({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': `${$http.getSession(data.token)}`,
    }); */

    return $http.post(url, data);
};

export const getPosts = () => {
    const url = `${API_URL}/posts`;

    return $http.get(url);
};

export const getPostDetail = (id) => {
    const url = `${API_URL}/posts/${id}`;

    return $http.get(url, id);
};

export const updatePost = (id, data) => {
    const url = `${API_URL}/posts/${id}`;

    /* $http.setHeader({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': `${$http.getSession(data.token)}`,
    }); */

    return $http.put(url, data);
};

export const deletePost = (id) => {
    const url = `${API_URL}/posts/${id}`;

    $http.clearSession();

    return $http.delete(url, id);
};
