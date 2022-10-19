import * as PostsApi from '@api/PostsApi';
import Types from '../../ActionConstant';

const PostsAction = {
    addPost: (postInfo) => async (dispatch) => {
        dispatch({ type: Types.ADD_POST });

        try {
            const result = await PostsApi.addPost(postInfo);

            if (!result) throw new Error(`Error adding post: ${result}`);

            dispatch({
                type: Types.ADD_POST_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.ADD_POST_FAILURE,
                payload: error,
            });
        }
    },

    getPosts: () => async (dispatch) => {
        dispatch({ type: Types.GET_POSTS });

        try {
            const result = await PostsApi.getPosts();

            if (!result) throw new Error(`Couldn't get posts: ${result}`);

            dispatch({
                type: Types.GET_POSTS_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_POSTS_FAILURE,
                payload: error,
            });
        }
    },

    getPostDetail: (id) => async (dispatch) => {
        dispatch({ type: Types.GET_POST_DETAIL });

        try {
            const result = await PostsApi.getPostDetail(id);

            if (!result) throw new Error(`Couldn't get post detail: ${result}`);

            dispatch({
                type: Types.GET_POST_DETAIL_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.GET_POST_DETAIL_FAILURE,
                payload: error,
            });
        }
    },

    updatePost: (data) => async (dispatch) => {
        dispatch({ type: Types.UPDATE_POST });

        try {
            const result = await PostsApi.updatePost(data);

            if (!result) throw new Error(`Update post failed: ${result}`);

            dispatch({
                type: Types.UPDATE_POST_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.UPDATE_POST_FAILURE,
                payload: error,
            });
        }
    },
};

export default PostsAction;
