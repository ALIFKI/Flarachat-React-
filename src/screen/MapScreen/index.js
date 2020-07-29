import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MapView,{ Marker } from 'react-native-maps';
import style from './style'
import felin from '../../images/felin.jpg'
import IonIcon from  'react-native-vector-icons/Ionicons'
import {API_URL} from '@env'
import { connect } from 'react-redux';

class MapScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            loc : {}
        }
    }
    componentDidMount(){
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     let region = {
        //       latitude:       position.coords.latitude,
        //       longitude:      position.coords.longitude,
        //     }
        //   }, (error)=>console.log(error));
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
                  <MapView
                    style={style.maps}
                    initialRegion={{
                    latitude: loc.lat,
                    longitude: loc.long,
                    latitudeDelta: 0.0002,
                    longitudeDelta: 0.0091,
                    
                    }}
                    showsCompass={true}
                    showsBuildings={true}
                    showsTraffic={true}
                    showsIndoors={true}
                >
                        <Marker
                            draggable
                            coordinate={{latitude : loc.lat, longitude: loc.long}}
                            title={data.name}
                            // description={'Hdsajljas'}
                            onDragEnd={(e) => console.log(e)}
                        />
                </MapView> 
                <View style={style.card}>
                    <View style={style.profileHead}>
                        <Image source={{uri: `${API_URL}uploads/${data.image}`}} style={style.profile}/>
                        <View style={style.detail}>
                        <Text style={style.name}> {data.name} </Text>
                        <Text style={style.time}> {data.updated_at} </Text>
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