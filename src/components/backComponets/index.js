import React, { Component } from 'react'
import IonIcon from 'react-native-vector-icons/FontAwesome'
import { Text, View,TouchableOpacity,TouchableHighlight } from 'react-native'
import style from './style'
import * as RootNavigation from '../../routes/RootNav';

export default class BackButton extends Component {
    render() {
        return (
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => RootNavigation.navigate('chat')}
            style={style.backButton}
           >
           <View style={style.touch} >
                 <IonIcon name="arrow-left" size={15} color={'white'}/><Text style={{color: 'white',marginLeft : 5}}>Back</Text>
           </View>
           </TouchableHighlight>
        )
    }
}
