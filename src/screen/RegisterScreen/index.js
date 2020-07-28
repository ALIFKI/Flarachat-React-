import React, { Component } from 'react'
import { Image,TextInput,TouchableHighlight, Alert,View } from 'react-native';
import { theme, withGalio,Text,Input,GalioProvider, Button} from 'galio-framework'
// import {Icon } from 'native-base';
import LoginStyle from './style';
import IonIcon from 'react-native-vector-icons/FontAwesome'
class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            focus : false,
            username : '',
            email : '',
            password : '',
            validate : false
        }
    }
    handelRegister = ()=>{
        this.props.navigation.navigate('dashboard')
    }
    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          this.setState({ 
              email : text,
              validate : false ,
            })
        }
        else {
          this.setState({ 
              email : text,
              validate : true
         })
        }
      }
    render() {
        const customTheme = {
            SIZES: { BASE: 18, },
            COLORS: { PRIMARY: '#3B5998', } 
          };
        return (
            <>
            <GalioProvider theme={customTheme}>
            <View style={LoginStyle.content}>
                <View style={LoginStyle.header}>
                </View>
                <View style={LoginStyle.header}>
                        <Text h6 style={LoginStyle.wl}>Lets Start Your Jurney !!</Text>
                        <Text muted>
                            Create your account and find beautiful books
                        </Text>
                    </View>
                <View style={LoginStyle.form}>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Email" rounded borderless={true} style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.validate(text)}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Username/Fullname" rounded borderless={true} style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} onChangeText={text=>this.setState({username : text})}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Password" rounded borderless={true} password style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} onChangeText={text=>this.setState({password : text})}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        
                    </View>
                    <View  style={LoginStyle.formInput,LoginStyle.submitWrapper} >
                    <TouchableHighlight
                    activeOpacity={0.06}
                    underlayColor="#DDDDDD"
                    >
                        <Button color={'#567AF4'} shadowless round onPress={this.handelRegister}>Register</Button>
                    </TouchableHighlight>
                    </View>
                    <View style={LoginStyle.registerTxt}>
                        {/* <Text muted>Have an Account ?  </Text>
                        <Text>Login</Text> */}
                    </View>
                </View>
                <TouchableHighlight
                 activeOpacity={0.6}
                 underlayColor="#DDDDDD"
                 onPress={() => this.props.navigation.goBack()}
                 style={LoginStyle.backButton}
                >
                <View style={LoginStyle.touch} >
                      <IonIcon name="arrow-left" size={15} color={'white'}/><Text style={{color: 'white',marginLeft : 5}}>Back</Text>
                </View>
                </TouchableHighlight>
            </View>
            </GalioProvider>
            </>
        )
    }
}

export default RegisterScreen
