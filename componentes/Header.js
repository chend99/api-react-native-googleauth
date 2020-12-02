import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { DrawerActions } from '@react-navigation/native';

export default class HeaderCustom extends Component {
    render() {
        let boton;
        if (this.props.boton) {
            boton = (
                <Button transparent onPress={() => this.props.navigate() }>
                    <Icon name='menu' />
                </Button>
            );
        }
        return (
            <Header>
                <Left style={{ flex: 1 }}>
                    {boton}
                </Left>
                <Body style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                </Right>
            </Header>
        )
    }
}