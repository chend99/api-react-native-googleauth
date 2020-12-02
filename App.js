import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import * as Font from 'expo-font';
import LoginScreen from './Screen/LoginScreen';
import { DrawerNavigator } from './Navigator/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLoggedIn: false,
    }
  }
  setLogin() {
    this.setState({ isLoggedIn: true });
  }

  setLogout() {
    this.setState({ isLoggedIn: false });
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    else {
      let screen;
      if (!this.state.isLoggedIn) {
        screen = <LoginScreen onLogin={() => this.setLogin()} />
      } else {
        screen = (
          <NavigationContainer>
            <DrawerNavigator onLogout={() => this.setLogout()} />
          </NavigationContainer>
        )
      }

      return screen;
    }

  }
}

