import React, { Component } from 'react'
import { Text, View,Image,ScrollView,TouchableOpacity,Alert } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import BackButton from '../../components/backComponets'
import {logout,updateUser} from '../../redux/actions/auth'
import { connect } from 'react-redux'
import {API_URL} from '@env'
import {Input} from 'galio-framework'

class EditeScreen extends Component {
    constructor(props){
        super(props)
        this.state= {
            LogoutLoading : false,
            name : 'Flarista',
            bio : ''
        }
    }
    handleLogout = ()=>{
        this.props.logout()
        this.setState({
            LogoutLoading : true
        })
    }
    handleSubmit = ()=>{
        var data = {
            name : this.state.name,
            bio : this.state.bio,
            token : this.props.user.auth.token
        }
        this.props.updateUser(data).then((res)=>{
            // console.log(res)
            Alert.alert(
                'Success!!',
                'Your Profile has been change',
                [
                    { text: 'OK', onPress: () => this.props.navigation.goBack() }
                ],
                { cancelable: false }
            )
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    componentDidMount(){
        this.setState({
            bio : this.props.user.auth.bio,
            name : this.props.user.auth.name
        })
    }
    render() {
        const data = this.props.user.auth
        return (
            <View style={style.container}>
                <TouchableOpacity 
                onPress={this.handleSubmit}
                style={style.logoutBtn}>
                    <IonIcon name="bookmark-outline" size={25}/>
                </TouchableOpacity>
                <ScrollView>
                <View style={style.header}>
                    <Image source={{uri : `${API_URL}uploads/${this.props.user.auth.image}`}} style={style.profile}/>
                    <View style={style.action}>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('edit')}}
                        style={style.icon}>
                            <IonIcon name="create-outline" size={25} style={{color: 'white'}}/>
                        </TouchableOpacity>
                        <Input placeholder="name" value={this.state.name} rounded borderless={true} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({name : text})}/>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('maps',{user : data})}} 
                        style={style.icon}>
                            <IonIcon name="navigate" size={25} style={{color: 'white'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.content}>
                    <Text style={style.title} onPress={()=>{console.log(this.props.user)}}>
                        Bio
                    </Text>
                    <View>
                    <Input placeholder="Write whats your think" value={this.state.bio} rounded borderless={true} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({bio : text})}/>
                    </View>
                </View>
                </ScrollView>
                {/* <Image source={{uri : `${API_URL}uploads/${this.props.user.auth.image}`}} style={style.profile}/>
                <Text>
                    {
                        this.props.user.auth.image
                    }
                </Text> */}
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth
})
const mapDispatchToProps = {logout,updateUser}
export default connect(mapStateToProps,mapDispatchToProps)(EditeScreen)
