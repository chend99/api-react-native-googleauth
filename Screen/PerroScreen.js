
import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import HeaderCustom from '../componentes/Header';
import Dato from '../componentes/Dato';

const axios = require('axios');
const perros =
    [
        'https://i.imgur.com/YFmp7LR.jpg',
        'https://i.imgur.com/WV5HOIu.jpg',
        'https://i.imgur.com/OZtERYL.png',
        'https://i.imgur.com/nwZqVez.jpg'

    ]
export default class DatoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dato: "Preciona el botón para obtener un dato",
            currentImageIndex: 0
        }
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
                animal_type: 'dog'
            }
        })
            .then(
                response => { this.setState({ dato: response.data.text }) }
            )
    }
    render() {
        return (
            <Container>
                 <HeaderCustom title='Perros' boton={true} navigate={() => this.props.navigation.toggleDrawer()}/>
                <Dato  texto={this.state.dato} foto={perros[this.state.currentImageIndex]} />
                <Button block onPress={this.getAPI.bind(this)}>
                    <Text>Obtener Dato</Text>
                </Button>
            </Container>
        );
    }
}