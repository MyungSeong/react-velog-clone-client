import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '@root/redux';

import Pages from './pages';

render(
    <Provider store={store}>
        <Pages />
    </Provider>,
    document.getElementById('root'),
);
