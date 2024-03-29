const UsersType = {
    SIGNUP_USER: 'SIGNUP_USER',
    SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
    SIGNUP_USER_FAILURE: 'SIGNUP_USER_FAILURE',

    SIGNIN_USER: 'SIGNIN_USER',
    SIGNIN_USER_SUCCESS: 'SIGNIN_USER_SUCCESS',
    SIGNIN_USER_FAILURE: 'SIGNIN_USER_FAILURE',

    SIGNOUT_USER: 'SIGNOUT_USER',
};

const PostsType = {
    ADD_POST: 'ADD_POST',
    ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
    ADD_POST_FAILURE: 'ADD_POST_FAILURE',

    GET_POSTS: 'GET_POST',
    GET_POSTS_SUCCESS: 'GET_POST_SUCCESS',
    GET_POSTS_FAILURE: 'GET_POST_FAILURE',

    GET_POST_DETAIL: 'GET_POST_DETAIL',
    GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS',
    GET_POST_DETAIL_FAILURE: 'GET_POST_DETAIL_FAILURE',

    UPDATE_POST: 'UPDATE_POST',
    UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
    UPDATE_POST_FAILURE: 'UPDATE_POST_FAILURE',

    DELETE_POST: 'DELETE_POST',
    DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
    DELETE_POST_FAILURE: 'DELETE_POST_FAILURE',
};

const CommentsType = {
    ADD_COMMENT: 'ADD_COMMENT',
    ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
    ADD_COMMENT_FAILURE: 'ADD_COMMENT_FAILURE',

    GET_COMMENTS: 'GET_COMMENTS',
    GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
    GET_COMMENTS_FAILURE: 'GET_COMMENTS_FAILURE',

    DELETE_COMMENTS: 'DELETE_COMMENTS',
    DELETE_COMMENTS_SUCCESS: 'DELETE_COMMENTS_SUCCESS',
    DELETE_COMMENTS_FAILURE: 'DELETE_COMMENTS_FAILURE',
};

const Types = {
    ...UsersType,
    ...PostsType,
    ...CommentsType,
};

export default Types;
