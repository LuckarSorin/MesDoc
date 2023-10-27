import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchBar from './routes/SearchBar';
import CustomPopup from './routes/CustomPopUp';
import Register from './routes/Register';
import Home from './routes/Home'
import Medecine from './routes/Medecine'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

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
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false,
          }} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Inscription',
              headerTitleAlign: 'center',
            }}

          />
          <Stack.Screen name="Medecine" component={Medecine}
            options={{
              title: 'Mon médicament',
              headerStyle: {
                backgroundColor: '#BDCBF3',
              },
              headerTitleAlign: 'center',
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;