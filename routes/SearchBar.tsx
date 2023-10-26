import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Ajoutez ici votre logique de recherche en fonction de l'entrée de l'utilisateur.
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher..."
         placeholderTextColor="white"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingTop: 20,
    alignItems: 'center',
  },
  input: {

    width: 350,
    height: 40,
    borderWidth: 4,
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: 'white',
  },
});

export default SearchBar;
