import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '@layout/Header';
import Grid from '@components/common/Grid';
import Post from '@components/Post';

import PostActions from '@redux/Posts/PostsAction';

const Main = () => {
    const { postInfo } = useSelector((state) => state.PostInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PostActions.getPosts());
    }, [postInfo, dispatch]);

    const postData = {
        id: 1,
        title: 'test',
        content: 'test',
        createdAt: 20220101,
        commentCount: 1,
        userName: 'testUser',
        imageUrl: null,
    };

    return (
        <>
            <Header />
            <Recent>
                <FontAwesomeIcon style={{ margin: '0 10px' }} icon={faClock} />
                최신
            </Recent>
            <PostList>
                <Post key={postData.postingId} {...postData} />
                {postInfo?.data?.map((data, index) => {
                    return (
                        <Post
                            key={index}
                            id={data.id}
                            title={data.title}
                            content={data.content}
                            createdAt={data.createdAt}
                            commentCount={data.commentCount}
                            userName={data.userName}
                            imageUrl={data.imageUrl}
                        />
                    );
                })}
            </PostList>
        </>
    );
};

const Recent = styled.div`
    max-width: 1024px;
    font-size: 18px;
    color: rgb(134, 142, 150);
    margin: 20px auto;
`;

const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: auto;
    max-width: 1024px;
    margin: 0 auto;
`;

export default Main;
