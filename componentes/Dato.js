import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class Dato extends Component {

    render() {
        return (
            <Container>
                <Content style={{ marginTop: 30 }}>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: this.props.foto }} style={{ height: 350, width: null, flex: 1 }} />
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