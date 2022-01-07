import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Modal from 'react-modal';

import { BASENAME } from '@constants/Config';
import { history } from '@reduxConfig';
import routes from '@routes';

import Main from './Main';
import AddPost from './AddPost';
import ViewPost from './ViewPost';

import '@styles/scss/style.scss';

const PagesIndex = () => {
    const pages = routes.map((route, index) => {
        return route.component ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
            />
        ) : null;
    });

    return (
        <>
            <ConnectedRouter history={history}>
                <Route path='/' exact component={Main} />
                <Route path='/post' exact component={AddPost} />
                <Route path='/post/:id' exact component={ViewPost} />
                {/* {pages} */}
                {/* <div>Test</div> */}
                {/* <Redirect from='/' to={BASENAME} /> */}
            </ConnectedRouter>
        </>
    );
};

Modal.setAppElement('#root');

export default PagesIndex;
