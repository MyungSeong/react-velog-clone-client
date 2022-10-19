import * as UsersApi from '@api/UsersApi';
import Types from '../../ActionConstant';

const UsersAction = {
    /*
     * @title 유저 로그인
     * @param {Object} userInfo 로그인 정보
     * @returns
     */
    signInUser: (userInfo) => async (dispatch) => {
        dispatch({ type: Types.SIGNIN_USER });

        try {
            const result = await UsersApi.signInUser(userInfo);

            if (!result) throw new Error(`Error user login failed: ${result}`);

            dispatch({
                type: Types.SIGNIN_USER_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.SIGNIN_USER_FAILURE,
                payload: error,
            });
        }
    },
    signOutUser: () => async (dispatch) => {},
};

export default UsersAction;
