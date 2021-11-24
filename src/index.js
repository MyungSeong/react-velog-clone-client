import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import store from '@root/redux';
import { BASENAME } from '@root/utils/constants/Config';

render(
    <Provider store={store}>
        <BrowserRouter basename={BASENAME}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
