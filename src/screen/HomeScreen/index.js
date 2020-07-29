import React, { Component } from 'react'
import { Text, View,Button,StyleSheet,ScrollView, Image,TouchableOpacity } from 'react-native'
import styles from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
// import { ScrollView } from 'react-native-gesture-handler';
import image from '../../images/felin.jpg'
import meta from '../../images/meta.jpg'
import { connect } from 'react-redux'
import { getHome } from '../../redux/actions/home'
import {API_URL} from '@env'
class HomeScreen extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.handleGetChatList()
    }
    handleGetChatList = ()=>{
        var data = {
            token : this.props.user.auth.token
        }
        this.props.getHome(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Messages</Text>
                    <IonIcon name="search-outline" size={25} style={styles.searchIcon}/>
                </View>
                <ScrollView style={styles.mainContent}>
                    {
                        this.props.home.HomeMsg.map((row,index)=>{
                            return <TouchableOpacity
                                    key={index} 
                                    onPress={()=>{this.props.navigation.navigate('chat',
                                    {
                                        id : row.id_sendTo == this.props.user.auth.id? row.id_users : row.id_sendTo ,
                                        name : row.sender == this.props.user.auth.name? row.reciver : row.sender,
                                        image : row.sender == this.props.user.auth.name? row.reciverImage : row.senderImage
                                    })}}
                                    style={styles.chatBody}>
                                        {row.sender == this.props.user.auth.name?(
                                                <Image source={{uri : `${API_URL}uploads/${row.reciverImage}`}} style={styles.profile}/>
                                        ): (
                                                <Image source={{uri : `${API_URL}uploads/${row.senderImage}`}} style={styles.profile}/>
                                            )
                                        }
                                        <View style={styles.chatWrap}>
                                            {row.sender == this.props.user.auth.name?(
                                                <Text style={styles.sender}>{row.reciver}</Text>
                                            ): (
                                            <Text style={styles.sender}>{row.sender}</Text>
                                            )
                                            }
                                            <Text style={styles.chat}>{row.messages}... </Text>
                                        </View>
                                        <View style={styles.time}>
                                            <Text style={styles.hours}>5 Hours</Text>
                                            <View style={styles.unread}>
                                                <Text style={{color : 'white',fontSize : 10,fontFamily :'Poppins-Bold'}}>1</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth,
    home : state.home
})
const mapDispatchToProps = {getHome}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)