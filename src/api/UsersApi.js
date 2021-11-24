import { ApiManager } from '../utils';
import { API_URL } from '@root/utils/constants/Config';
import { setSession, getSession, clearSession } from '@lib/index';

const $http = new ApiManager();

export function signUpUser(data) {
    const url = `${API_URL}/user/signup`;

    $http.setHeader({
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': `${getSession('key', 'value')}`,
    });
}

export function loginUser(data) {
    const url = `${API_URL}/user/login`;

    $http.setHeader({
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': `${getSession('key', 'value')}`,
    });

    return $http.post(url, data);
}

export function logoutUser(data) {
    const url = `${API_URL}/user/logout`;

    $http.clearSession();

    return $http.post(url, data);
}
