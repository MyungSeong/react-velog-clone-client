import Types from '../../ActionConstant';
import { history } from '@reduxConfig';

const UsersAction = {
    addPost: (postInfo) => async (dispatch) => {
        dispatch({ type: Types.ADD_POST });

        try {
            dispatch({
                type: Types.ADD_POST_SUCCESS,
                payload: postInfo,
            });

            history.goBack();
        } catch (error) {
            dispatch({
                type: Types.GET_POST_FAILURE,
                payload: error,
            });
        }
    },

    getPosts: () => async (dispatch) => {
        dispatch({ type: Types.GET_POSTS });

        try {
            dispatch({
                type: Types.GET_POSTS_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_POSTS_FAILURE,
                payload: error,
            });
        }
    },
};

export default UsersAction;
