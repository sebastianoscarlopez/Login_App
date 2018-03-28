'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    ActivityIndicator
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { NavigationActions } from "react-navigation";

import tryAutenticate, * as Actions from '../core/actions/login'; //Import your actions
import {texts as T} from '../resources/values';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: ''
        };
    }
    static navigationOptions = {
        header: null
    };
    navigate = () => {
        const navigateToHome = NavigationActions.navigate({
          routeName:'home',
          params:{name:'Shubhnik'}
        })
        this.props.navigation.dispatch(navigateToHome);
    }

    render() {
        const loading = (this.props.message == "OK" || this.props.loading) &&
            <View>
                <ActivityIndicator animating={true}/>
            </View>;
        const input =
            <View>
                <Text>Inicio de sesion</Text>
                <TextInput 
                    placeholder={T.user}
                    onChangeText={value => this.setState({user:value})}
                    value={this.state.user}
                />
                <TextInput 
                    placeholder={T.password}
                    onChangeText={value => this.setState({password:value})}
                    value={this.state.password}
                />
                <Button
                    onPress={() => 
                        this.props.tryAutenticate(this.state.user, this.state.password)
                    }
                    title={T.autenticar}
                    disabled={this.props.loading}
                />
                <Text>{this.props.message}</Text>
            </View>;
        const result = [input, loading];
        return (result);
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.LoginReducer.loading,
        message: state.LoginReducer.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tryAutenticate, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);