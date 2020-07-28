import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text> Home </Text>
                <View
                style={styles.button}>

                <Button 
                title='Maps' 
                
                onPress={()=>{this.props.navigation.navigate('Maps')}}
                />
                </View>
                <View
                style={styles.button}>

                <Button 
                title='Realtime' 
                
                onPress={()=>{this.props.navigation.navigate('RealTime')}}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content : {
        padding : 10
    },
    text : {
        fontSize : 30,
        textAlign : 'center'
    },
    button : {
        paddingTop : 30,
        marginTop : 30
    }
})