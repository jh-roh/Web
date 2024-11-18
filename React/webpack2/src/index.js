import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.js';

function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해주세요'),
        React.createElement(Button, { label: '좋아요' }),
        React.createElement(Button, { label: '싫어요' })
    );
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Container));
