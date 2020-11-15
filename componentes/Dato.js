import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
const gatos =
    [
        'https://i.imgur.com/WTpVkiV.png',
        'https://i.imgur.com/ekFgZv7.png',
        'https://i.imgur.com/yrGFw7U.jpg',
        'https://i.imgur.com/Ag6y3Gp.png'

    ]

export default class Dato extends Component {
    render() {
        return (
            <Container>
                <Content style={{ marginTop: 30 }}>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: gatos[this.props.numeroRandom] }} style={{ height: 350, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'justify' }}>{this.props.texto}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        );
    }
}