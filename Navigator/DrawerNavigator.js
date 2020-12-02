
import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import DatoScreen from "../Screen/DatoScreen";
import { DrawerContentScreen } from "../Screen/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export class DrawerNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Gatos"
                headerMode={'none'}
                drawerContent={props =>
                    <DrawerContentScreen onLogout={() => {
                        this.props.onLogout();
                    }}
                        {...props} />
                }
                
            >
            
                <Drawer.Screen name="Gatos" component={DatoScreen} />
            </Drawer.Navigator>
        );
    }

}