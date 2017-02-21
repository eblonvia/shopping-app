import React, { Component } from 'react';
//import { styles } from '../../assets/css/index';


import {
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const inlineStyles = {
  illustration_image: {

  }, facebook_button: {
    margin: 5,
    height: 60,
    lineHeight: 55,
    fontSize: 18,
    borderRadius: 30,
    textAlign: "center",
    borderColor: "transparent",
    backgroundColor: "#3b5998",
    color: "#FFF"
  }, auth_action_button: {
    margin: 5,
    marginTop: 15,
    height: 60,
    textAlign: "center",
    lineHeight: 55,
    fontSize: 18,
    backgroundColor: "#FF984C",
    color: "#FFF"
  } 
};

export default class Login extends Component {
  render() {
    return (
      <View>
        <View className="row row-bottom images-row">
          <View className="col">
            <View className="illustration-container">
              <Image className="illustration-image" source={require("../../assets/img/auth/login_illustration.png")} />
            </View>
          </View>
        </View>
        <View className="row form-row">
          <View className="col">

            <TouchableHighlight className="button button-block facebook_button">
              <Text style={inlineStyles.facebook_button} className="facebook_button">Log in with Facebook</Text>
            </TouchableHighlight>
            <Text className="form-Viewider">or</Text>
            <View name="login_form" className="form-container" novalidate>
              <View className="input-list list list-inset">
                <TextInput value="username" style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
                <TextInput value="password" style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
                <Text ng-show="error" className="message error">{'error'}</Text>
                <TouchableHighlight 
                  className="button button-block auth-action-button">
                  <Text style={inlineStyles.auth_action_button}>Log in</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View className="alternative-actions">
            </View>
          </View>
        </View>
      </View>
    );
  }
}

{/*<ion-content has-bouncing="false">
        <View className="row form-row"> <View className="col"> <a className="button button-block facebook-button" ng-click="doFacebookLogIn()">Log in with Facebook</a> <Text className="form-divider">or</Text> <form name="login_form" className="form-container" novalidate>
          <div className="input-list list list-inset">
            <label className="item item-input">
              <TextInput type="text" placeholder="email" name="email" ng-model="user.email" required>
            </label>
            <label className="item item-input" show-hide-container>
              <TextInput type="password" placeholder="password" name="password" ng-model="user.password" required show-hide-input>
            </label>
          </div>
          <p ng-show="error" className="message error">{{error}}</p>
          <TouchableHighlight type="submit" className="button button-block auth-action-button" ng-click="doLogIn()" ng-disabled="login_form.$invalid">
            Log in
          </button>
        </form>
        <div className="alternative-actions">
          <a className="action-link button button-small button-clear" ui-sref="intro.auth-forgot-password()">Forgot Password?</a>
          <a className="action-link button button-small button-clear" ui-sref="intro.auth-signup()">Sign up</a>
        </div>
      </div>
    </div>
  </ion-content>*/}
