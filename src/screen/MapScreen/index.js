import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native'
import MapView,{ Marker, AnimatedRegion } from 'react-native-maps';
import style from './style'
import felin from '../../images/felin.jpg'
import IonIcon from  'react-native-vector-icons/Ionicons'
import {API_URL} from '@env'
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';
import moment from 'moment'

class MapScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            loc : {},
            lat : 0,
            long : 0,
            mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        }
    }
    handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
    componentDidMount(){
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     let region = {
        //       latitude:       position.coords.latitude,
        //       longitude:      position.coords.longitude,
        //     }
        //   }, (error)=>console.log(error));
        // this.setState({
        //     lat : JSON.parse(this.props.route.params.user.loc).lat,
        //     long : JSON.parse(this.props.route.params.user.loc).long
        // })
        Geolocation.getCurrentPosition((loc)=>{
            console.log(loc)
            this.setState({
                    lat : loc.coords.latitude,
                    long : loc.coords.longitude
            })
            // this.map.animateToRegion({
            //     latitude: coords.latitude,
            //     longitude: coords.longitude,
            //     latitudeDelta: 0.005,
            //     longitudeDelta: 0.005
            //   })
        },
        error => Alert.alert('Error', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 50000, maximumAge: 1000},
        )
    }
    componentWillUnmount(){
        this.handleUpdateLoc()
    }
    handleUpdateLoc = ()=>{
        Axios({
            method : 'PUT',
            headers : {
              Authorization : this.props.user.auth.token 
            },
            url : `http://192.168.43.124:3000/api/users`,
            data : {
                loc : JSON.stringify({
                    lat : this.state.lat,
                    long : this.state.long,
                })
            }
        }).then((res)=>{
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        const data = this.props.route.params.user
        const loc = data.id == this.props.user.auth.id ? JSON.parse(this.props.route.params.user.loc) : JSON.parse(this.props.route.params.user.loc)
        return (
            <View style={style.content}>
                <TouchableOpacity
                onPress={()=>{this.props.navigation.goBack()}} 
                style={style.backBtn}>
                    <IonIcon name="arrow-back" size={27}/>
                </TouchableOpacity>
                {
                    this.state.lat == 0 ? (<Text>Loading</Text>):(
                        <MapView
                        showsUserLocation 
                        style={style.maps}
                        initialRegion={{
                        latitude: data.id == this.props.user.auth.id ? this.state.lat : loc.lat,
                        longitude: data.id == this.props.user.auth.id ? this.state.long : loc.long,
                        latitudeDelta: 0.0002,
                        longitudeDelta: 0.0091,
                        }}
                        showsTraffic={true}
                        // onMapReady={}
                    >
                            <Marker
                                draggable
                                coordinate={{latitude : data.id == this.props.user.auth.id ? this.state.lat : loc.lat, 
                                    longitude: data.id == this.props.user.auth.id ? this.state.long : loc.long}}
                                title={data.name}
                                // description={'Hdsajljas'}
                                onDragEnd={(e) => console.log(e)}
                            />
                    </MapView>
                    )
                } 
                <View style={style.card}>
                    <View style={style.profileHead}>
                        <Image source={{uri: `${API_URL}uploads/${data.image}`}} style={style.profile}/>
                        <View style={style.detail}>
                        <Text style={style.name}> {data.name} </Text>
                        <Text style={style.time}> {moment(data.created_at).fromNow()} </Text>
                        <Text style={style.time}>  </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth
})

export default connect(mapStateToProps)(MapScreen)