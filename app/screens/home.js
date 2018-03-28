'use strict';

import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import getData, * as Actions from '../core/actions/home';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }
    
    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View>
                <Text>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text>
                    {item.description}
                </Text>
            </View>
        )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.HomeReducer.loading,
        data: state.HomeReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(getData, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);