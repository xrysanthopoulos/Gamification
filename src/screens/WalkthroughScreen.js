import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button, ImageBackground} from 'react-native';
import LoginScreen from "./LoginScreen";
import { useNavigation } from '@react-navigation/native';

const walkthroughData = [
    {
        title: 'Discover and Support Local Businesses with CityTrail',
        description: 'This is a great way to explore your local community and businesses while also earning rewards! ',
        image: require('../assets/images/step1.jpg'),
    },
    {
        title: 'Easy to Use and Navigate',
        description: 'Our app is designed to be user-friendly and easy to navigate.',
        image: require('../assets/images/map.jpg'),
    },
    {
        title: 'Get Started',
        description: 'Start using the app and enjoy the benefits',
        image: require('../assets/images/explore.jpg'),
    },
];


const WalkthroughScreen = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const navigation = useNavigation();


    // Your code for handling navigation between steps goes here

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleNext = () => {
        if (step === totalSteps) {
            // If the user finishes the walkthrough, navigate to the home screen
            navigation.navigate('Home');
        } else {
            // Otherwise, go to the next step
            setStep(step + 1);
        }
    };


    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
            {/* The current step's image */}
            <Image source={walkthroughData[step - 1].image} style={styles.image} />
            {/* The current step's title and description */}
            <Text style={styles.title}>{walkthroughData[step - 1].title}</Text>
            <Text style={styles.description}>{walkthroughData[step - 1].description}</Text>
            {/* The navigation buttons */}
            <View style={styles.buttons}>
                {/* The back button */}
                {step > 1 && (
                    <TouchableOpacity style={styles.button} onPress={handleBack}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                )}
                {/* The next/finish button */}
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {step === totalSteps ? 'Finish' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        padding: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 150,
        padding: 20
    },
    button: {
        backgroundColor: '#255ad2',
        padding: 10,
        borderRadius: 10,
        width: 100,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});



export default WalkthroughScreen;
