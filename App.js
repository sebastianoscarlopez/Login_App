import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/config/store';
import * as Screens from './app/screens';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Screens.Login />
            </Provider>
        );
    }
}