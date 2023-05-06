import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import WalkthroughScreen from "./screens/WalkthroughScreen";
import Leaderboard from './screens/LeadeBoardScreen';
import PaymentScreen from './screens/PaymentScreen'

import MapScreen from "./screens/MapScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
            {/*<Tab.Navigator initialRouteName="WalkthroughScreen">*/}
            {/*    <Tab.Screen name="Login" component={LoginScreen} />*/}
            {/*    <Tab.Screen name="Profile" component={ProfileScreen} />*/}
            {/*</Tab.Navigator>*/}
            <Stack.Navigator initialRouteName="WalkthroughScreen" screenOptions={{ headerShown: true }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#000'
                        }}}
                    name="Map" component={MapScreen}/>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#000'
                        }}}
                    name="WalkthroughScreen" component={WalkthroughScreen}/>

                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            cardStyle: {
                            backgroundColor: 'white'
                            },
                            headerStyle: {
                            backgroundColor: '#30d2e7'
                            },
                            headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('MAPS_PAGE')}
                                style={{
                                    marginRight: 15
                                  }}

                            >
                                <Ionicons name="map-outline" size={24} color="white" />
                            </TouchableOpacity>
                            )
                        }}
                    />
                <Stack.Screen
                    options={{ title: 'Welcome',
                        headerStyle: {
                        backgroundColor: '#e7305b'
                    }}}
                    name="Home" component={HomeScreen}/>

                <Stack.Screen
                    options={{ title: 'Leader Board',
                        headerStyle: {
                        backgroundColor: '#30d2e7'
                    }}}
                    name="LeaderBoard" component={Leaderboard}/>



                <Stack.Screen
                    options={{
                        cardStyle: {
                            backgroundColor: 'green'
                        },
                        headerStyle: {
                            backgroundColor: '#30d2e7'
                        }}}
                    name="Login" component={LoginScreen}/>




                    <Stack.Screen
                        options={{
                        cardStyle: {
                            backgroundColor: 'white'
                        },
                        headerStyle: {
                            backgroundColor: '#30d2e7'
                        }}}
                    name="Payment" component={PaymentScreen}/>


            </Stack.Navigator>
        </NavigationContainer>


    );
};

export default App;
