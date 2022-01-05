import { ApiManager } from '../utils';
import { API_URL } from '@root/utils/constants/Config';

const $http = new ApiManager();

export const signUpUser = (data) => {
    const url = `${API_URL}/user/signup`;

    /*
     * 서버에서 생성된 세션 key -> redux 스토어에 저장
     */

    $http.setHeader({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': `${$http.getSession(data.token)}`,
    });

    return $http.post(url, data);
};

export function loginUser(data) {
    const url = `${API_URL}/user/login`;

    $http.setHeader({
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': `${$http.getSession(data.token)}`,
    });

    return $http.post(url, data);
}

export function logoutUser(data) {
    const url = `${API_URL}/user/logout`;

    $http.clearSession();

    return $http.delete(url, data);
}
