import React, { useEffect } from 'react';
import styled from 'styled-components';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '@layout/Header';
import Post from '@components/Post';

import { useDispatch, useSelector } from 'react-redux';
// import PostActions from '@redux/';

const Main = () => {
    const dispatch = useDispatch();
    // const post_list = useSelector((state) => state.post.list);

    // console.log(post_list);

    useEffect(() => {
        // dispatch(postActions.getPostMW());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Recent>
                <FontAwesomeIcon style={{ margin: '0 10px' }} icon={faClock} />
                최신
            </Recent>

            <PostList>
                {/* {post_list.map((p, idx) => {
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
