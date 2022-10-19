import { ApiManager } from '@lib';
import { API_URL } from '@constants/Config';

const $http = new ApiManager();

export const signUpUser = (data) => {
    const url = `${API_URL}/users/signup`;

    return $http.post(url, data);
};

export const signInUser = (data) => {
    const url = `${API_URL}/users/login`;

    return $http.post(url, data);
};

export const singOutUser = (data) => {
    const url = `${API_URL}/users/logout`;

    $http.clearSession();

    return $http.delete(url, data);
};
