import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import MapScreen from '../screen/MapScreen'
import RealTimeScreen from '../screen/RealTimeScreen'
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import TabsBar from '../components/TabsComponents'
import ChatScreen from '../screen/ChatScreen';
import PageScreen from '../screen/PageScreen';
import { navigationRef } from './RootNav';

const Stack = createStackNavigator();

export default class Route extends Component {
    render() {
        return (
            <NavigationContainer  ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown : false}} />
                <Stack.Screen name="dashboard" component={TabsBar} options={{headerShown : false}} />
                <Stack.Screen name="chat" component={ChatScreen} options={{headerShown : false}} />
                <Stack.Screen name="detail" component={PageScreen} options={{headerShown : false}} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
