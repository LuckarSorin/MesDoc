import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const onChange = (text) => {
    if (typeof text === 'string') {
      setSearchText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrer vos symptômes.."
        placeholderTextColor="white"
        value={searchText}
        onChangeText={onChange}
        onSubmitEditing={handleSearch}
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
