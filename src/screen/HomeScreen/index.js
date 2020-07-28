import React, { Component } from 'react'
import { Text, View,Button,StyleSheet,ScrollView, Image,TouchableOpacity } from 'react-native'
import styles from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
// import { ScrollView } from 'react-native-gesture-handler';
import image from '../../images/felin.jpg'
import meta from '../../images/meta.jpg'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Messages</Text>
                    <IonIcon name="search-outline" size={25} style={styles.searchIcon}/>
                </View>
                <ScrollView style={styles.mainContent}>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('chat',{id: 56})}}
                    style={styles.chatBody}>
                        <Image source={image} style={styles.profile}/>
                        <View style={styles.chatWrap}>
                            <Text style={styles.sender}>
                                Flarista
                            </Text>
                            <Text style={styles.chat}>Jadi nggk jalan-jalan?... </Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.hours}>5 Hours</Text>
                            <View style={styles.unread}>
                                <Text style={{color : 'white',fontSize : 10,fontFamily :'Poppins-Bold'}}>1</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.chatBody}>
                        <Image source={meta} style={styles.profile}/>
                        <View style={styles.chatWrap}>
                            <Text style={styles.sender}>
                                Meta
                            </Text>
                            <Text style={styles.chat}>Hii Alif apa kabar?... </Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.hours}>5 Hours</Text>
                            <View style={styles.unread}>
                                <Text style={{color : 'white',fontSize : 10,fontFamily :'Poppins-Bold'}}>1</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}