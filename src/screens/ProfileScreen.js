import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../Layout';

const ProfileScreen = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
});

export default ProfileScreen;
