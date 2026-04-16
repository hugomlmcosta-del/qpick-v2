import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const operatorName = 'Operator'; // Replace with actual operator name
  const syncStatus = true; // Replace with actual sync status

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {operatorName}!</Text>
      <Text style={styles.status}>Sync Status: {syncStatus ? 'Synced' : 'Not Synced'}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Picking" onPress={() => {/* Handle picking */}} />
        <Button title="Inventory" onPress={() => {/* Handle inventory */}} />
        <Button title="Transfers" onPress={() => {/* Handle transfers */}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default HomeScreen;