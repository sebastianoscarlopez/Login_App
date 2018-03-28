import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/core/config/store'
import AppNavigation from './app/core/navigation'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
