import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('Allergies');
    if (value !== null || value !="" || value !=" ") {
      // value previously stored
      console.log(value)
      return value;
    }
  } catch (e) {
    console.error(e)
  }
};
const CustomPopup = ({ visible, onClose }) => {

const [searchText, setSearchText] = useState('');
const [open, setOpen] = useState(false);
const [value, setValue] = useState('no');
const [items, setItems] = useState([
  { label: 'Oui', value: 'yes' },
  { label: 'Non', value: 'no' },
]);
const [searchText2, setSearchText2] = useState('');
const [open2, setOpen2] = useState(false);
const [value2, setValue2] = useState('no');
const [items2, setItems2] = useState([
  { label: 'Oui', value: 'yes' },
  { label: 'Non', value: 'no' },
]);

const storeData = async () => {
  try {
    if (value == "no"){
      await AsyncStorage.setItem('Allergies', "a rien");
      await AsyncStorage.setItem('traitements', value2);
    }else{
      await AsyncStorage.setItem('Allergies', searchText);
     await AsyncStorage.setItem('traitements', searchText2);
    }
  } catch (e) {
    console.error(e)
  }
};

const onPressClose = () => {
  storeData();
  getData();
  onClose();
};

const handleSearch = (text) => {
    setSearchText(text);
    // Ajoutez ici votre logique de recherche en fonction de l'entrée de l'utilisateur.
  };
const handleSearch2 = (text) => {
    setSearchText2(text);
    // Ajoutez ici votre logique de recherche en fonction de l'entrée de l'utilisateur.
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Bienvenue sur MesdDoc! </Text>
          <Text style={styles.modalText}>Afin de vous proposés les meilleurs résultats selon vos besoins nous aurons besoins des informations suivantes : </Text>
          <View style={styles.container}>
              <Text style={styles.modalText}>Avez-vous des allèrgies médicamenteuses, si oui lesquelles ? </Text>
              <View style={styles.containerAsk}>
                     <View style={styles.containerDrop}>
                     <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={styles.dropDownStyle}
                            dropDownContainerStyle={styles.dropDownContainerStyle}
                          /></View>
             {value === 'yes' && (
                           <TextInput
                             style={styles.input}
                             placeholder="Paracétamol..."
                             placeholderTextColor="grey"
                             value={searchText}
                             onChangeText={handleSearch}
                             onSubmitEditing={storeData}
                           />
                         )}</View>

          </View>
          <View style={styles.container}>
                <Text style={[styles.modalText, styles.extraPadding]}>Suivez vous actuellement un ou des traitements médicamenteux, si oui lesquels ? </Text>
                <View style={styles.containerAsk}>
                                <View style={styles.containerDrop}>
                               <DropDownPicker
                                      open={open2}
                                      value={value2}
                                      items={items2}
                                      setOpen={setOpen2}
                                      setValue={setValue2}
                                      setItems={setItems2}
                                      style={styles.dropDownStyle}
                                      dropDownContainerStyle={styles.dropDownContainerStyle}
                                    /></View>


                       {value2 === 'yes' && (
                                     <TextInput
                                       style={styles.input}
                                       placeholder="Anticoagulants..."
                                       placeholderTextColor="grey"
                                       value={searchText2}
                                       onChangeText={handleSearch2}
                                       onSubmitEditing={storeData}
                                     />
                                   )}
          </View>
          </View>
          <View style={styles.close}>
             <Button title="Sauvegarder" onPress={onPressClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
     marginBottom: 15,
     fontSize: 24,
     fontWeight: 'bold',
     textAlign: 'center',
  },
  container: {
      padding: 2,
      alignItems: 'center',
    },

  containerDrop: {
        width: 100,
        margin: 5,
        alignItems: 'center',
      },
    containerAsk: {
    flexDirection: 'row',
        alignItems: 'center',
  },
  input: {
      width: 250,
      borderWidth: 2,
      paddingLeft: 10,
      borderRadius: 15,
      borderColor: '#BDCBF3',
  },
  close: {

     paddingTop: 30,
  },
  dropDownStyle: {

      width: 100,
      borderWidth: 2,
      paddingLeft: 10,
      borderRadius: 15,
      borderColor: '#BDCBF3'
  },
  dropDownContainerStyle: {
  width: 100,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#BDCBF3'
  },
  extraPadding: {
      paddingTop: 20,
    },
});

export default CustomPopup;
