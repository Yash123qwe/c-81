import React, { Component } from 'react';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreateStory';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'red',
            }}
        >

            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreateStory} />

        </Tab.Navigator>
    )
}

export default TabNavigator


