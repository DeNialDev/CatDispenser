import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Stadistics from './views/Stadistics';
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Aplicacion IOT" component={Home} />
        <Stack.Screen name="Stadistics" component={Stadistics} />


      </Stack.Navigator>
    </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
