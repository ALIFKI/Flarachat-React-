import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView, Image,TouchableOpacity,Modal,ActivityIndicator,Alert } from 'react-native'
import styles from './style'
import {Input,Button} from 'galio-framework'
import IonIcon from 'react-native-vector-icons/Ionicons'
// import { ScrollView } from 'react-native-gesture-handler';
import image from '../../images/felin.jpg'
import meta from '../../images/meta.jpg'
import { connect } from 'react-redux'
import { getFriend } from '../../redux/actions/home'
import {API_URL} from '@env'
import Axios from 'axios'

class FriendList extends Component {
    constructor(props){
        super(props)
        this.state ={
            modalVisible : false,
            text : '',
            isLoading : false
        }
    }
    componentDidMount(){
        this.handleGetFriend()
    }
    
    handleGetFriend = ()=>{
        var data = {
            token : this.props.user.auth.token
        }
        this.props.getFriend(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleAddFriend= ()=>{
        this.setState({
            isLoading : true
        })
        Axios({
            method : 'POST',
            headers : {
              Authorization : this.props.user.auth.token 
            },
            url : `http://192.168.43.124:3000/api/friend`,
            data : {
                email : this.state.text
            }
        }).then((res)=>{
            this.handleGetFriend()
            console.log(res)
            Alert.alert(
                'Success',
                this.state.text+' now is your friend',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false,
                modalVisible : false
            })
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Friend</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        this.setState({
                            modalVisible : true
                        })
                    }}>
                    <IonIcon name="add-outline" size={25} style={styles.searchIcon}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.mainContent}>
                    {
                        this.props.home.friend.map((row,index)=>{
                            return <TouchableOpacity
                                    key={index}
                                    onPress={()=>{this.props.navigation.navigate('detail',{data : row})}}
                                    style={styles.chatBody}>
                                        <Image source={{uri: `${API_URL}uploads/${row.image}`}} style={styles.profile}/>
                                            <View style={styles.chatWrap}>
                                                <Text style={styles.sender}>
                                                    {row.name}
                                                </Text>
                                                <Text style={styles.chat}>See details</Text>
                                            </View>
                                            <View style={styles.time}>
                                                <View style={styles.unread}>
                                                    <IonIcon name="location" size={20} style={{color: 'white'}}/>
                                                </View>
                                            </View>
                                    </TouchableOpacity>
                        })
                    }
                </ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({
                                modalVisible : false
                            })
                            }}
                        >
                            <View style={styles.modalContent}>
                                <View style={styles.modal}>
                                <Input placeholder="Enter Email id" rounded borderless={true} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({text : text})}/>
                                <Button color={'#567AF4'} shadowless round onPress={this.handleAddFriend}>
                                    {
                                        this.state.isLoading ? (
                                            <ActivityIndicator color={'white'}/>
                                        ) : (<Text style={{color: 'white'}}>Add</Text>)
                                    }
                                </Button>
                                </View>
                            </View>
                    </Modal>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth,
    home : state.home
})
const mapDispatchToProps = {getFriend}
export default connect(mapStateToProps,mapDispatchToProps)(FriendList)