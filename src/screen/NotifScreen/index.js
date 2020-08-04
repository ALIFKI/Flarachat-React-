import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import styles from './style'
import BackButton from '../../components/backComponets'
import NotifCard from '../../components/NotifCard'
class NotifScreen extends Component {
    render() {
        return (
            <>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Notifications</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('notif')
                    }}>
                    </TouchableOpacity>
                </View>
                        <ScrollView style={styles.mainContent}>
                           
                        </ScrollView>
            </View>
            <BackButton backTo={'Friend'}/>
            </>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth
})

export default connect(mapStateToProps)(NotifScreen)
