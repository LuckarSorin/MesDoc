import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';


function Medecine ({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.expertDescription}>
              <Text style={styles.expertDescriptionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#BDCBF3'
  },
  sectionTitle: {
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  itemContent: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
  title: {
    fontSize: 20,
    color: 'grey',
  },
  text: {
     fontSize: 14,
     color: 'grey',
    },
  expertDescription: {
     alignItems: 'center',
     marginTop: 10,
  },
  expertDescriptionText: {
     textAlign: 'center',
     backgroundColor: 'white',
     padding: 20,
     fontSize: 14,
     marginVertical: 8,
     marginHorizontal: 16,
     borderRadius: 15,
    },
   image: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'black',
    },
    profileButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});

export default Medecine;
