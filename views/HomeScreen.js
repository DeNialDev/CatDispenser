import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CatDispenser from "../componentes/CatDispenser";
import CatRegister from '../componentes/CatRegister';
import DataDisplay from "../componentes/DataDisplay";
import SetIp from "../componentes/SetIp"
function StartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
  
      <Tab.Navigator>
        <Tab.Screen name="Start" component={DataDisplay} options={{headerShown: false}}/>
        <Tab.Screen name="Register" component={CatRegister} options={{headerShown: false}}/>
        <Tab.Screen name="Dispenser" component={CatDispenser} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={SetIp} options={{headerShown: false}}/>
      </Tab.Navigator>
    
  );
}

