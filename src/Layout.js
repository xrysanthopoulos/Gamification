import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Layout;
