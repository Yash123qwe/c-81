import React, { Component } from 'react';

import TabNavigator from './tabNavigator';

import Profile from '../screens/profile';

import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="CreatePost" component={CreateStory} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator


