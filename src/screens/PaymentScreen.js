import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [points, setPoints] = useState(100);

  const handlePayment = () => {
    // Handle payment logic here
    alert('Payment processed successfully!');
  };

  const handleRedeemPoints = () => {
    if (points >= 100) {
      setPoints(points - 100);
      alert('Offer redeemed successfully!');
    } else {
      alert('You do not have enough points to redeem this offer.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="XXXX-XXXX-XXXX-XXXX"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="XXX"
          keyboardType="numeric"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name on Card</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>You have {points} points</Text>
      </View>
      <TouchableOpacity style={styles.redeemButton} onPress={handleRedeemPoints}>
        <Text style={styles.redeemButtonText}>Redeem 100 points for a 15% offer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: 'white', 
      
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 16,
    },
    pointsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    pointsText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    redeemButton: {
      backgroundColor: '#7199f5',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    redeemButtonText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#0066cc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  
export default PaymentScreen;
