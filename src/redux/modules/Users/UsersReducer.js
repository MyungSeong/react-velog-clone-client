import Types from '../../ActionConstant';

const initialState = {
    userInfo: {},
    isLogin: false,
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Types.SIGNIN_USER:
            return {...state, userInfo: payload};

        default:
            return {...state};
    }
};

export default reducer;