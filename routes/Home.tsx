import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';
import CustomPopup from './CustomPopUp';
import {fetchMedoc} from './Api';


const DATA = Array.from(Array(20), (_, index) => ({
  id: index.toString(),
  title: `Médicament : ${index}`,
  text: `200mg, comprimé`,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjPSmm6Ul-xTVabVGyjeFS1MwfTsGYoW7hw&usqp=CAU'
}));
const DataDoc = {
  "specialiste": "Chirurgien orthopédique",
  "description": "Les chirurgiens orthopédiques sont des spécialistes qui traitent les problèmes liés au système musculo-squelettique, y compris les symptômes de mal de dos."
}


const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [medoc, setMedoc] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMedoc();
      setMedoc(result);
    };
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Register')}>
        <Image source={{ uri: 'https://cutewallpaper.org/24/profile-icon-png/user39s-profile-icon-free-svg.png' }} style={styles.profileImage} />
      </TouchableOpacity>
      <CustomPopup visible={modalVisible} onClose={() => setModalVisible(false)} />
      <View style={styles.sectionTitle}>
        <Text style={styles.titleText}>Bienvenue</Text>
      </View>
      <SearchBar />
      <View style={styles.expertDescription}>
        <Text style={styles.expertDescriptionTitle}>{DataDoc.specialiste}</Text>
        <Text style={styles.expertDescriptionText}>{DataDoc.description}</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={medoc}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Medecine', { item: item })}>
            <View style={styles.itemContent}>
              <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjPSmm6Ul-xTVabVGyjeFS1MwfTsGYoW7hw&usqp=CAU" }} style={styles.image} />
              <View>
                <Text style={styles.title}>{item.denomination}</Text>
                <Text style={styles.text}>{item.quantité == ""?  "" : item.quantité+"," } {item.forme_pharmacetique} </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  expertDescriptionText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 14,
  },
  expertDescriptionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 16,
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

export default Home;
