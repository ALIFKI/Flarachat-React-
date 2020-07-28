import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import felin from '../../images/felin.jpg'
import BackButton from '../../components/backComponets'

export default class PageScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Image source={felin} style={style.profile}/>
                    <View style={style.action}>
                        <View style={style.icon}>
                            <IonIcon name="search" size={25} style={{color: 'white'}}/>
                        </View>
                        <Text>
                            Flarista Aurelin
                        </Text>
                        <View style={style.icon}>
                            <IonIcon name="navigate" size={25} style={{color: 'white'}}/>
                        </View>
                    </View>
                </View>
                <View style={style.content}>
                    <Text style={style.title}>
                        Bio
                    </Text>
                    <View>
                        <Text style={style.bio}>
                            Lorem Ipsum dolor ilo ve you janah
                        </Text>
                    </View>
                </View>
                <BackButton/>
            </View>
        )
    }
}
