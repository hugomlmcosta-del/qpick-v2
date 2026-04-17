import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PickingScreen from '../screens/PickingScreen';
import InventoryScreen from '../screens/InventoryScreen';

const Stack = createStackNavigator();

const RootNavigator = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>  
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Picking" component={PickingScreen} />
            <Stack.Screen name="Inventory" component={InventoryScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;