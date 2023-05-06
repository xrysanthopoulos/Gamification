import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Layout from '../Layout';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

    function goProfileScreen() {
        navigation.navigate('Profile');
    }

  function goLoginScreen() {
    navigation.navigate('Login');
  }

  function goPaymentScreen() {
    navigation.navigate('Payment');
  }

    function goMapScreen() {
        navigation.navigate('Map');
    }

  function goLeaderBoardScreen() {
    navigation.navigate('LeaderBoard');
  }

  const Tile = ({ onPress, text, iconName }) => {
    return (
      <TouchableOpacity style={styles.tile} onPress={onPress}>
        <LinearGradient
          colors={['#255ad2', '#3d68e8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}>
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={24} color="white" />
          </View>
          <Text style={styles.tileText}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (


      <Layout>
        <View style={styles.container}>
          <Tile onPress={goProfileScreen} text="My Profile" iconName="person-outline" />
          <Tile onPress={goPaymentScreen} text="Payment" iconName="card-outline" />
          <Tile onPress={goLeaderBoardScreen} text="Leaderboard" iconName="trophy-outline" />
          <Tile onPress={goMapScreen} text="Maps" iconName="map-outline" />
          <Tile onPress={goLoginScreen} text="Logout" iconName="log-in-outline" />
        </View>
      </Layout>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',
        resizeMode: 'cover',
        paddingTop: 100,
      },

    tile: {
      width: '45%',
      height: 150,
      borderRadius: 12,
      overflow: 'hidden',
      margin: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    tileText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;