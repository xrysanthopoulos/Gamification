import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, TextInput, View, Alert, Text} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
    const [points, setPoint] = useState(require('../utils/test_pois.json'));
    // const [region, setRegion] = useState(null);
    const [avatar, setAvatar] = useState(require('../assets/icon.png'));

    const [location, setLocation] = useState();

    const [clickedMarkerRef, setClickedMarkerRef] = useState(null)


    Location.setGoogleApiKey("AIzaSyBABtudp9pkcceES0EdkqWLaiCEkjYRlM0");

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant location permissions");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            console.log("Location:");
            console.log(currentLocation);
            console.log(points);
        };
        getPermissions();
        // reverseGeocode();
    }, []);

    const geocode = async () => {
        const geocodedLocation = await Location.geocodeAsync(address);
        console.log("Geocoded Address:");
        console.log(geocodedLocation);
    };

    const reverseGeocode = async () => {
        const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude
        });

        console.log("Reverse Geocoded:");
        console.log(reverseGeocodedAddress);
    };

    function goProfileScreen() {
        navigation.navigate('Profile');
    }

    const IsNum = (poi) => {
        if (Number(poi.longitude !== undefined)){

            return(
                <Marker coordinate={{ latitude: Number(poi.latitude),longitude: Number(poi.longitude)}}  pinColor={'wheat'} tooltip={ true } title={poi.name +' +'+ poi.points+' points'} key={poi.id}/>)
        }
    }

    const mapStyle = [
        {
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative.neighborhood",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <MapView style={{width: 500, height: 500, flex: 1}}
                     showsUserLocation
                     followUserLocation
                     showsMyLocationButton
                     showsCompass
                     customMapStyle={mapStyle}
                     zoomEnabled pitchEnabled={true} initialRegion={{latitude: 38.2468085, longitude: 21.7395728, latitudeDelta: 0.01, longitudeDelta: 0.01}} >
                {/*<Marker coordinate={{latitude: 38.2468085, longitude: 21.7395728,}} pinColor={'red'} title='Your location' cluster={false}/>*/}

                {points.map(poi => (
                    IsNum(poi)
                ))}
                {/*<MapView.Marker*/}
                {/*    coordinate= {{latitude: 38.2, longitude: 21.7,}}*/}
                {/*    title={"marker.title"}*/}
                {/*    description= {"lolz"}*/}
                {/*/>*/}
                {/*<Marker coordinate={{ latitude: Number(poi.latitude),longitude: Number(poi.longitude)}} pinColor={'wheat'} title={poi.address} key={poi.id}/>*/}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        flex: 1,
    },
});