import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Container, Button, Text } from 'native-base';
import HeaderCustom from './componentes/Header';
import Dato from './componentes/Dato';


const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      dato: "Preciona el botón para obtener un dato",
      animal: "cat",
      currentImageIndex: 0
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  getAPI() {
    if (this.state.currentImageIndex === 3) {
      this.setState({ currentImageIndex: -1 });
    }
    this.setState(state => ({
      currentImageIndex: ++state.currentImageIndex,
      dato: "Loading..."
    }));
    axios.get('https://cat-fact.herokuapp.com/facts/random', {
      params: {
        animal_type: this.state.animal
      }
    })
      .then(
        response => { this.setState({ dato: response.data.text }) }
      )
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <HeaderCustom title="Gatos" />
        <Dato numeroRandom={this.state.currentImageIndex} texto={this.state.dato} />
        <Button block onPress={this.getAPI.bind(this)}>
          <Text>Obtener Dato</Text>
        </Button>
      </Container>
    );
  }
}

