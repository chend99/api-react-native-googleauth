import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';

export default class HeaderCustom extends Component {
    render() {
        return (
            <Header>
                <Left style={{ flex: 1 }}>
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