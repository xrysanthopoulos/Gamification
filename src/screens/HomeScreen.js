import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Layout from '../Layout';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    function goProfileScreen() {
        navigation.navigate('Profile');
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to my app!</Text>
                <Button
                    title="My Profile"
                    onPress={() => goProfileScreen()}
                />

                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                />

                <Button
                    title="Go to Map"
                    onPress={() => navigation.navigate('Map')}
                />



                <Button
                    title="LeadeBoard"
                    onPress={() => navigation.navigate('LeaderBoard')}
                />

            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#e7305b',
        padding: 16,
        borderRadius: 8,
      },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
