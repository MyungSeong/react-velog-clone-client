import Types from '../../ActionConstant';

const initialState = {
    postInfo: {
        loading: false,
        meta: {
            // totalCount: 0,
        },
        data: [
            /* {
                id: 1,
                title: '',
                content: '',
                createdAt: 19900101,
                commentCount: 0,
                userName: '',
                imageUrl: '',
                comments: [
                    {
                        postingId: 1,
                        userId: 1,
                        content: '',
                    },
                ],
            }, */
        ],
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.ADD_POST:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    loading: true,
                },
            };

        case Types.ADD_POST_SUCCESS:
            return {
                ...state,
                meta: {
                    totalCount: state.postInfo.meta.totalCount + 1,
                },
                postInfo: {
                    ...state.postInfo,
                    loading: false,
                    data: {
                        ...state.postInfo.data,
                        ...payload,
                    },
                },
            };

        case Types.ADD_POST_FAILURE:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };

        case Types.GET_POST:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    loading: true,
                },
            };

        case Types.GET_POST_SUCCESS:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    loading: false,
                    ...state.postInfo.data,
                },
            };

        case Types.GET_POST_FAILURE:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    loading: false,
                    ...state.postInfo.data.error,
                },
            };

        case Types.DELETE_POST:
            return { ...state };

        case Types.DELETE_POST_SUCCESS:
            return { ...state };

        case Types.DELETE_POST_FAILURE:
            return { ...state };

        case Types.ADD_COMMENT:
            return { ...state };

        case Types.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                postInfo: {
                    ...state.postInfo,
                    data: {
                        ...state.postInfo.data,
                        comments: state.postInfo.comments.concat({
                            ...payload,
                        }),
                    },
                },
            };

        case Types.ADD_COMMENT_FAILURE:
            return {
                ...state,
            };

        default:
            return { ...state };
    }
};

export default reducer;
