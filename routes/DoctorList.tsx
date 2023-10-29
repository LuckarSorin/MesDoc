import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { fetchDoctorList } from './Api';

function DoctorList({ route }) {
    const { texte } = route.params;
    console.log(texte)
    const [doc, setDoc] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDoctorList(texte);
            console.log(result)
            setDoc(result)
        };
        fetchData();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={doc}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <View style={styles.itemContent}>
                             <View>
                                <Text style={styles.title}>{item.nom +" "+ item.prenom}</Text>
                                <Text style={styles.text}>{item. libelleProfession}</Text>
                                <Text style={styles.text}>{(item.numeroVoie || item.libelleTypeVoie || item.libelleVoie || item.libelleCommun)? item.numeroVoie +" "+ item.libelleTypeVoie +" "+ item.libelleVoie +" "+ item.libelleCommune: "Auncune adresse précisé"}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />


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

});

export default DoctorList;
