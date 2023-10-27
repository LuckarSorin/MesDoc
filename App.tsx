import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchBar from './routes/SearchBar';
import CustomPopup from './routes/CustomPopUp';
import Register from './routes/Register';
import Home from './routes/Home'
import Medecine from './routes/Medecine'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

const Stack = createStackNavigator();
enableScreens();

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Inscription',
              headerLeft: () => null,
            }}
          />
          <Stack.Screen name="Medecine" component={Medecine} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;