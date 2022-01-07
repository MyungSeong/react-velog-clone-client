import { useRef } from 'react';

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

const PostEditor = ({ height, ref }) => {
    // const editorRef = useRef();

    return (
        <Editor
            height={height}
            placeholder='당신의 이야기를 적어보세요...'
            initialEditType='markdown'
            previewStyle='vertical'
            previewHighlight='false'
            usageStatistics='false'
            plugin={[
                codeSyntaxHighlight,
                colorSyntax,
                chart,
                tableMergedCell,
                uml,
                { highlighter: Prism },
            ]}
            ref={ref}
        />
    );
};

export default PostEditor;
