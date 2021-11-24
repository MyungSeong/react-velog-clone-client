import Types from '../../ActionConstant';

const UsersAction = {
    /*
     * @title 유저 로그인
     * @param {Object} userInfo 로그인 정보
     * @returns
     */
    signinUser: (userInfo) => async (dispatch) => {
        try {
            dispatch({ type: Types.SIGNIN_USER, payload: userInfo });

            return true;
        } catch (error) {
            return false;
        }
    },
};

export default UsersAction;
