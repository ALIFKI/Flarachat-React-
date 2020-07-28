import React, { Component } from 'react'
import { Image,TextInput, Alert,TouchableOpacity,ToastAndroid,View } from 'react-native';
import { theme, withGalio,Text,Input,GalioProvider, Button,Toast} from 'galio-framework'
// import { View,Icon } from 'native-base';
import LoginStyle from './style'
import image from '../../images/chatLogin.png'
import Awsome from 'react-native-vector-icons/FontAwesome'
class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            focus : false,
            username : '',
            password  : '',
            isLoading : false,
            validate : false,
            isShow : false
        }
    }
    
    onRegister = ()=>{
        this.props.navigation.navigate('Register')
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          this.setState({ 
              username : text,
              validate : false ,
            })
        }
        else {
          this.setState({ 
              username : text,
              validate : true
         })
        }
      }
    handleLogin = ()=>{

    }
    render() {
        const customTheme = {
            SIZES: { BASE: 18, },
            // this will overwrite the Galio SIZES BASE value 16
            COLORS: { PRIMARY: '#3B5998', } 
          };
        return (
            <>
            <GalioProvider theme={customTheme}>
            <View style={LoginStyle.content}>
                <View style={LoginStyle.header}>
                    <View style={LoginStyle.bgImage} >
                    <Image source={image} style={LoginStyle.imgBg}></Image>
                    </View>
                    <Text h6 style={LoginStyle.wl}>Welcome Back !!</Text>
                    <Text muted>
                        Lets Chat with your friend and connected
                    </Text>
                </View>
                <View style={LoginStyle.form}>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Email" rounded borderless={true} style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.validate(text)}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Password" rounded borderless={true} password style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} onChangeText={text=>this.setState({password : text})}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Text style={LoginStyle.textForgot}>Forgot Password?</Text>
                        {/* <Awsome name="book" size={24} /> */}
                    </View>
                    <View  style={LoginStyle.formInput,LoginStyle.submitWrapper} >
                        <TouchableOpacity
                        
                        >
                        <Button color={'#567AF4'} shadowless round onPress={this.handleLogin}>Log in</Button>
                        </TouchableOpacity>
                    </View>
                    <View style={LoginStyle.registerTxt}>
                        <Text muted>Don't Have account?  </Text><Text onPress={this.onRegister}>Register</Text>
                    </View>
                </View>
            </View>
            </GalioProvider>
            </>
        )
    }
}

export default LoginScreen
