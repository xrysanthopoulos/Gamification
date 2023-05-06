import React, { useState } from 'react';
import { StyleSheet, TextInput,Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { ScrollView, View, Text } from 'react-native';


const Achievement = [
    {
      name: 'Explorer',
      description: 'Visit 5 tourist attractions',
      points: 50,
      badge: '../assets/images/empire_state_building.png',
    },
    {
      name: 'Foodie',
      description: 'Try 10 local dishes',
      points: 75,
      badge: 'src\assets\images\background-image.png',
    },
    {
      name: 'Photographer',
      description: 'Take photos at 3 scenic spots',
      points: 100,
      badge: 'https://example.com/photographer-badge.png',
    },
    
  ];

const ProfileScreen = () => {
    const [achievements, setAchievements] = useState(Achievement);
    const [points, setPoints] = useState(0);
    

    return (


        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
         
          <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/man.png')}
          
          style={styles.profilePicture}
        />
        <Text style={styles.bioText}>Jeff</Text>
      </View>

      <View style={styles.rectangularBadge}>
      <View style={styles.badgeSection}>
        <Image source={require('../assets/images/adventures.png')} style={styles.badgeImage} />
      </View>
      <View style={styles.badgeSection}>
        <Image source={require('../assets/images/award.png')} style={styles.badgeImage} />
      </View>
      <View style={styles.badgeSection}>
        <Image source={require('../assets/images/food.png')} style={styles.badgeImage} />
      </View>
      </View>
      <View style={styles.achievementsContainer}>
        <Text style={styles.achievementsPoints}>Total Points:</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={400 / 1000} color="#FFD700"  style={{ height: 20, width: '90%' }} />
        <Text style={styles.achievementsPoints}>{400} / 1000</Text>
        <Text style={styles.achievementsHeader}>Achievements:</Text>

            
        
        {achievements.map((achievement) => (
          <View style={styles.achievementItem} key={achievement.name}>
            <Text style={styles.achievementName}>{achievement.name}</Text>
            <Text style={styles.achievementDescription}>{achievement.description}</Text>
            <Text style={styles.achievementPoints}>+{achievement.points} points</Text>
          </View>
        ))}
        
      </View>
    </View>
        </View>
      </ScrollView>


        
    );
};


export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    badge: {
        width: 60,
        height: 60,
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0077c2',
    },
    logo: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    achievementsBtn: {
        backgroundColor: '#1c78d6',
        borderRadius: 5,
        padding: 10,
    },
    achievementsContainer: {
        padding: 20,
    },
    achievementsPoints: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },

    achievementsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    achievementItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    achievementName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    achievementDescription: {
        fontSize: 14,
        marginBottom: 5,
    },
    achievementPoints: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0077c2',
        marginBottom: 5,
    },
    achievementBadge: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    rectangularBadge: {
        borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#eedd82 ',
        borderColor: '#000',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    badgeSection: {
        width: '30%',
        alignItems: 'center',
    },
    badgeImage: {
        width: 50,
        height: 50,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
        marginTop: 20,
    },
    bioText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    totalPointsContainer: {
        height: 10,
        width: '50%',
        backgroundColor: '#ddd',
        borderRadius: 5,
    },

  
  });
