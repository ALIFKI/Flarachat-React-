import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import MapScreen from '../screen/MapScreen'
import RealTimeScreen from '../screen/RealTimeScreen'
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator();

export default class Route extends Component {
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown : false}} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Maps" component={MapScreen} />
                <Stack.Screen name="RealTime" component={RealTimeScreen} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
