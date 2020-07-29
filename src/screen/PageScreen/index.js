import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import felin from '../../images/felin.jpg'
import BackButton from '../../components/backComponets'
import {API_URL} from '@env'


export default class PageScreen extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.route.params)
    }
    render() {
        const data = this.props.route.params.data
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Image source={{uri : `${API_URL}uploads/${data.image}`}} style={style.profile}/>
                    <View style={style.action}>
                        <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('maps',{user : data})}} 
                        style={style.icon}>
                            <IonIcon name="location" size={25} style={{color: 'white'}}/>
                        </TouchableOpacity>
                        <Text>
                            {data.name}
                        </Text>
                        <TouchableOpacity 
                        style={style.icon}
                        onPress={()=>{this.props.navigation.navigate('chat',
                                    {
                                        id : data.id_friends,
                                        name : data.name
                                    })}}
                        >
                            <IonIcon name="navigate" size={25} style={{color: 'white'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.content}>
                    <Text style={style.title}>
                        Bio
                    </Text>
                    <View>
                        <Text style={style.bio}>
                            {data.bio}
                        </Text>
                    </View>
                </View>
                <BackButton/>
            </View>
        )
    }
}
