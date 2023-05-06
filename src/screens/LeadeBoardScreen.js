import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';


const Leaderboard = () => {
  const leaderboardData = [
    { name: 'Jeff', score: 400, image: require('../assets/images/man.png') },
    { name: 'Jane', score: 180, image: require('../assets/images/dancer.png') },
    { name: 'Bob', score: 175, image: require('../assets/images/gamer.png') },
    { name: 'Alice', score: 160, image: require('../assets/images/girl.png') },
    { name: 'Tom', score: 150, image: require('../assets/images/boy.png') },
    { name: 'Emma', score: 140, image: require('../assets/images/woman.png') },
    { name: 'Jack', score: 130, image: require('../assets/images/indian-man.png') },
    { name: 'Linda', score: 120, image: require('../assets/images/air-hostess.png') },
    { name: 'Sam', score: 110, image: require('../assets/images/student.png') },
  ];

  return (
    <ScrollView>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.container}>
                    <Text style={styles.title}>Leaderboard</Text>
                    <View style={styles.leaderboard}>
                        {leaderboardData.map((item, index) => (
                        <View key={index} style={styles.leaderboardItem}>
                            <Text style={styles.rank}>
                            {index + 1}
                            {index < 3 ? (
                                index === 0 ? (
                                <Image source={require('../assets/images/diamond.png')} style={styles.medal} />
                                ) : (
                                <Image source={require('../assets/images/silver-medal.png')} style={styles.medal} />
                                )
                            ) : (
                                <Image source={require('../assets/images/bronze-medal.png')} style={styles.medal} />
                            )
                            }
                            </Text>
                            <View style={styles.leaderboardUser}>
                            <Image source={item.image} style={styles.avatar} />
                            <View style={styles.userInfo}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.score}>{item.score} points</Text>
                            </View>
                            </View>
                        </View>
                        ))}
                    </View>
                    </View>
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
      marginVertical: 30,
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 20,
      width: '90%',
      maxWidth: 600,
      alignSelf: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    leaderboard: {
      width: '100%',
      marginTop: 20,
    },
    leaderboardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 5,
    },
    rank: {
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 10,
      color: '#333',
    },
    medal: {
      width: 15,
      height: 15,
      marginRight: 10,
    },
    leaderboardUser: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 25,
    },
    userInfo: {
      flexDirection: 'column',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    score: {
      fontSize: 16,
      color: '#555',
    },
  });
  
  
export default Leaderboard;
