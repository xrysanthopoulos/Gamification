import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LoginIMG from '../assets/images/login.jpg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    // Your code for handling login logic goes here

    return (
        <View style={styles.back}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={{width: '100%'}}
                    source={LoginIMG}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={{fontSize: 20}}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <CustomButton label={"Done"} onPress={() => navigation.navigate('Home')}/>
                <Text style={{flex:1, justifyContent: 'center', textAlign: 'center', paddingTop: 50}}>
                    Don't have account? Create account.
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    back: {
        flex: 1,
        // position: 'absolute',
        left: -1,
        top: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
    },
    container: {
        // position: 'absolute',
        flex:1,
        left: '5%',
        // top: 282,
        width: '90%',
        height: '100%',
        borderRadius: 28,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
