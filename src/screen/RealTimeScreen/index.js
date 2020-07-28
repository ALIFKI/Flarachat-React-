import React, { Component } from 'react'
import io from 'socket.io-client'
import { Text, View, Button } from 'react-native';
import axios from 'axios'


export default class RealtimeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }

    }
    handleSubmitChat(){
        this.socket.emit('chat-message','Hi From app')
        // this.socket.emit('chat-message','chat')
    }
    componentDidMount(){
        this.socket = io('http://192.168.43.124:3000')
        this.socket.on('products',(msg)=>{
            this.setState({
                data : [...this.state.data,msg]
            })
        })
        axios({
            method : 'GET',
            url : 'http://192.168.43.124:3000/products'
        }).then((res)=>{
            this.setState({
                data : res.data.data
            },()=>{
                console.log(this.state.data)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    componentWillUnmount(){
        this.socket.disconnect()
        this.socket.removeAllListeners()
    }
    render() {
        return (
            <View>
                <Text> RealTime </Text>
                <Button title="chat"
                onPress={()=>{
                    this.handleSubmitChat()
                }}
                 ></Button>

                 {
                     this.state.data.map((row,index)=>{
                         return <View key={index}>
                             <Text>{row.name}</Text>
                         </View>
                     })
                 }
            </View>
        )
    }
}
