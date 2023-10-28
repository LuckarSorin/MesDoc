import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';


function Medecine({ route }) {
  const { item } = route.params;
  console.log(item)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.intro}>
          <Text style={styles.bigTitle}>{item.denomination}</Text>
          <Text style={styles.text}>{item.quantité == ""?  "" : item.quantité+"," } {item.forme_pharmacetique}</Text>
        </View>
        <View style={styles.Description}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.DescriptionText}>{item.description}</Text>
        </View>
        <View style={styles.Description}>
          <Text style={styles.title}>Allergènes</Text>
          {item.allergenes.map((allergene, index) => (
            <Text style={styles.DescriptionText} key={index}>{"- "+allergene}</Text>
          ))}
        </View>
        <View style={styles.Description}>
          <Text style={styles.title}>Contre indication</Text>
          {item.contre_indication.map((contreIndication, index) => (
            <Text style={styles.DescriptionText} key={index}>{"- "+contreIndication}</Text>
          ))}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#BDCBF3'
  },
  Description: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  DescriptionText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,

  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'grey',
  },
  title: {
    fontSize: 22,
    color: 'grey',
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },

});

export default Medecine;
