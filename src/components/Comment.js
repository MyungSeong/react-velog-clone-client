import { Fragment } from 'react';
import styled from 'styled-components';

const Comment = (userName, comment) => {
    return (
        <Fragment>
            <Wrapper>
                <Profile>
                    <User>{userName}</User>
                </Profile>
                <CommentWrap>{comment}</CommentWrap>
            </Wrapper>
        </Fragment>
    );
};

const Wrapper = styled.div`
    margin: 30px 0;
`;

const Profile = styled.div`
    box-sizing: border-box;
`;

const User = styled.span`
    font-weight: bold;
`;

const CommentWrap = styled.div`
    box-sizing: border-box;
    margin: 10px 0;
`;

export default Comment;
