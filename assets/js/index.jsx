import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/home'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


ReactDOM.render((
        <Router history={history}>
            <Route path={'/'} component={Home} />
        </Router>
    ),
    document.getElementById('main-container')
);
