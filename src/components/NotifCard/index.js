import React, { Component } from 'react'
import { Text, View,Image ,TouchableOpacity } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
import felin from '../../images/felin.jpg'
import LinearGradient from 'react-native-linear-gradient'

class NotifCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.notifCard}>
                <Image source={felin} style={styles.profile}/>
                <View style={styles.notifBody}>
                    <Text style={styles.sender}>
                        Flarista
                    </Text>
                    <Text style={styles.msg}>
                        Send You Are request
                    </Text>
                    <View style={styles.action}>
                    <LinearGradient
                            colors={['#19E6E3', '#C08CFC']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={styles.gradient}
                            >
                        <TouchableOpacity
                        style={styles.actionBtn}>
                            <Text style={styles.buttonText}>
                                Accept
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                            colors={['#F4A4A6', '#F4A4A6']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={styles.gradient}
                            >
                        <TouchableOpacity
                        style={styles.actionBtn}>
                            <Text style={styles.buttonText}>
                                Decline
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth
})
export default connect(mapStateToProps)(NotifCard)