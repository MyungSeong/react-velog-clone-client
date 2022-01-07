import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '@layout/Header';
import Post from '@components/Post';

import PostActions from '@redux/Posts/PostsAction';

const Main = () => {
    const { postInfo } = useSelector((state) => state.PostInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(`prev: ${postInfo}`);
        dispatch(PostActions.getPosts());
        console.log(`next: ${postInfo}`);

        console.log(postInfo);
    }, [postInfo, dispatch]);

    const postData = {
        postingId: 1,
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
                {/* {postInfo?.data?.map((p, idx) => {
                    return <Post key={idx} {...p} />;
                })} */}
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
