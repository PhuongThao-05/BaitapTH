import { StyleSheet, Text, View } from 'react-native' 
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabNavigate.js';
const Stack = createNativeStackNavigator();
    
const StackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="BottomTabs" screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigation;

const styles = StyleSheet.create({})