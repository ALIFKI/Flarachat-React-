import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import MapView,{ Marker } from 'react-native-maps';
export default class MapScreen extends Component {
    render() {
        return (
            <View style={style.content}>
                  {/* <MapView
                    style={style.maps}
                    initialRegion={{
                    latitude: -7.3619326,
                    longitude: 109.9020599,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >
                        <Marker
                            draggable
                            coordinate={{latitude : -7.3623915, longitude: 109.8987011}}
                            title={'Heloo'}
                            description={'Hdsajljas'}
                            onDragEnd={(e) => console.log(e)}
                        />
                </MapView>  */}
            </View>
        )
    }
}

const style = StyleSheet.create({
    maps : {
        // height : 400,
        left : 0,
        right : 0,
        bottom : 0,
        top : 0,
        position : 'absolute'
    },
    content : {
        left : 0,
        right : 0,
        bottom : 0,
        top : 0,
        position : 'absolute'
    }
})
