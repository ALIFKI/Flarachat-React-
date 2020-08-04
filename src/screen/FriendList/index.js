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
import ListFriend from '../../components/ListFriend'

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
            url : `${API_URL}api/friend`,
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
            Alert.alert(
                'Ooops!!',
                'email id '+this.state.text+' is incorrect',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false,
                modalVisible : false
            })
        })
    }
    render() {
        const notif = this.props.home.friend.filter((row,index)=>{
            return row.acc_at == null
        }).length

        return (
            <>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Friends</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('notif')
                    }}>
                        <IonIcon name="notifications" size={20} style={styles.searchIcon}/>
                        {
                            notif >=1?(
                                <View style={styles.badge}>
                                </View>
                            ) : (
                                <View>
                                </View>
                            )
                        }
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.mainContent}>
                    {
                        this.props.home.friend.filter((row,index)=>{
                            return row.acc_at !== null
                        }).map((row,index)=>{
                            return <ListFriend key={index} data={row}/>
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
                                <TouchableOpacity 
                                onPress={()=>{
                                    this.setState({
                                        modalVisible : true
                                    })
                                }}
                                style={styles.btnAdd}>
                                    <IonIcon name="add-outline" size={25} style={{color: 'white'}}/>
                                </TouchableOpacity>
                                </>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth,
    home : state.home
})
const mapDispatchToProps = {getFriend}
export default connect(mapStateToProps,mapDispatchToProps)(FriendList)