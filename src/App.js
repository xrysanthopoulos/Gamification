import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import WalkthroughScreen from "./screens/WalkthroughScreen";
import MapScreen from "./screens/MapScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
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
                    options={{ title: 'Welcome',
                        headerStyle: {
                        backgroundColor: '#e7305b'
                    }}}
                    name="Home" component={HomeScreen}/>
                <Stack.Screen
                    options={{
                    headerStyle: {
                        backgroundColor: '#30d2e7'
                    }}} name="Profile" component={ProfileScreen}/>
                <Stack.Screen
                    options={{
                        cardStyle: {
                            backgroundColor: 'green'
                        },
                        headerStyle: {
                            backgroundColor: '#30d2e7'
                        }}}
                    name="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>


    );
};

export default App;
