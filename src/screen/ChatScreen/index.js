import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'
import {Input} from 'galio-framework'
import style from './style';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import felin from '../../images/felin.jpg'
export default class ChatScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    id : 2,
                    message : 'hi Whats app',
                    user_id : 4,
                    send_to : 2,
                },
                {
                    id : 3,
                    message : 'hello',
                    user_id : 2,
                    send_to : 4,
                },
              ],
            txt : ''
        }
    }
    handleSubmit = ()=>{
        const msg = {
            id : 4,
            message : this.state.txt,
            user_id : 2,
            send_to : 4,
        }
        this.setState({
            data : [...this.state.data,msg]
        })
    }
    render() {
        return (
            <View style={style.content}>
                <View style={style.header}>
                    <IonIcon name="arrow-back-outline" size={24}/>
                    <Text style={style.username}>Username </Text>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('detail')
                    }}>
                    <Image source={felin} style={style.profile}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={style.chatWrapper}>
                    {
                        this.state.data.map((row,index)=>{
                            return row.user_id === 2 ? (
                                <View style={style.chatBodySelf} key={index}>
                                    <View style={style.chatBubbleSelf}>
                                        <Text style={style.messageMe}>
                                            {row.message}
                                        </Text>
                                    </View>
                                    <Text style={style.time}>
                                        5.00pm
                                    </Text>
                                </View>
                            ) : (
                                <View style={style.chatBody} key={index}>
                                    <View style={style.chatBubbleSend}>
                                        <Text style={style.messageSend}>
                                            {row.message}
                                        </Text>
                                    </View>
                                    <Text style={style.time}>
                                        5.00pm
                                    </Text>
                                </View>
                            )
                        })
                    }
                    </ScrollView>
                <View style={style.inputMessage}>
                    <IonIcon name="happy-outline" size={30} style={style.icon} />
                    <Input placeholder="Write Your Message" rounded borderless={true} style={style.messageInput} placeholderTextColor={'#D4D7DE'} onChangeText={text=>this.setState({txt : text})}/>
                    <TouchableOpacity
                    onPress={this.handleSubmit}
                    style={style.send}>
                        <IonIcon name="send" size={24} style={{color: 'white'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
