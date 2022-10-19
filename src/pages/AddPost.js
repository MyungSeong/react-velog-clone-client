import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '@reduxConfig';
import PostsAction from '@redux/Posts/PostsAction';

import { getCookie } from '@lib/Cookie';

import Header from '@layout/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { PostEditor } from '@layout/Post';

import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import chart from '@toast-ui/editor-plugin-chart';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/chart/dist/toastui-chart.css';

const AddPost = () => {
    const { userInfo } = useSelector((state) => state.UserInfo);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const editorRef = useRef();

    // const jwtToken = getCookie('is_login');

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };

    // const dataURLtoFile = (dataurl, fileName) => {
    //   let arr = dataurl.split(","),
    //     mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]),
    //     n = bstr.length,
    //     u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new File([u8arr], fileName, { type: mime });
    // };

    const cancelPost = () => {
        history.goBack();
    };

    const addPost = () => {
        console.log(editorRef);

        // const contentHTML = editorRef.current.getInstance().getHTML();
        const contentMarkdown = editorRef.current.getInstance().getMarkdown();
        // const image = contentHTML.split("=")[1]?.split('"')[1];

        // const imageUrl = contentHTML.split('=')[1]?.split('"')[1];
        // const content = contentMarkdown.replaceAll('#', '').split('!')[0];

        const post = {
            title: title,
            content: contentMarkdown,
            userName: userInfo.userName,
            // imageUrl: imageUrl,
        };
        console.log(post);

        dispatch(PostsAction.addPost(post));

        history.goBack();
    };

    return (
        <>
            <Header />
            <PostWrapper>
                <Title
                    type='title'
                    placeholder='제목을 입력하세요'
                    onChange={changeTitle}
                ></Title>
                {/* <PostEditor height={'78vh'} ref={editorRef} /> */}
                <Editor
                    height='80vh'
                    placeholder='당신의 이야기를 적어보세요...'
                    initialEditType='markdown'
                    previewStyle='vertical'
                    previewHighlight='false'
                    useCommandShortcut={true}
                    usageStatistics='false'
                    plugin={[
                        codeSyntaxHighlight,
                        colorSyntax,
                        chart,
                        tableMergedCell,
                        uml,
                        { highlighter: Prism },
                    ]}
                    ref={editorRef}
                />
            </PostWrapper>
            <ButtonWrapper>
                <CancelButton
                    variant='primary'
                    type='submit'
                    className='submitBtn'
                    onClick={cancelPost}
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ marginRight: '10px' }}
                    />
                    나가기
                </CancelButton>
                <AddButton
                    variant='primary'
                    type='submit'
                    className='submitBtn'
                    onClick={addPost}
                >
                    출간하기
                </AddButton>
            </ButtonWrapper>
        </>
    );
};

const PostWrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
`;

const Title = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    scrollbar-width: none;
    font-size: 32px;
    font-weight: bold;
    border: none;
    padding: 40px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
        'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
        'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
        Tahoma, Geneva, sans-serif;

    &::-webkit-scrollbar {
        display: none;
    }

    &::placeholder {
        color: lightgray;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    background-color: #fff;
    box-shadow: 0 0 5px #dbdbdb;
`;

const CancelButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 16px;
    height: 40px;
    padding: 8px 15px;
    margin: 12px 0 0 15px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #e6e6e6;
    }
`;

const AddButton = styled.button`
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: rgb(18, 184, 134);
    font-size: 16px;
    height: 40px;
    padding: 8px 20px;
    margin: 12px 15px 0 0;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: rgb(18, 194, 124);
    }
`;

export default AddPost;
