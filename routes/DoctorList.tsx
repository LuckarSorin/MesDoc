import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import {fetchDoctorList} from './Api';

function DoctorList({ route }) {
    const { texte } = route.params;
    console.log(texte)
    const [doc, setDoc] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchDoctorList(texte);
          setDoc(result);
        };
        fetchData();
      }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <FlatList
                    style={{ flex: 1 }}
                    data={doc}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity >
                            <View style={styles.itemContent}>
                                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjPSmm6Ul-xTVabVGyjeFS1MwfTsGYoW7hw&usqp=CAU" }} style={styles.image} />
                                <View>
                                    <Text style={styles.title}>{item.denomination}</Text>
                                    <Text style={styles.text}>{item.quantité == "" ? "" : item.quantité + ","} {item.forme_pharmacetique} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />

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
    itemContent: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
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

export default DoctorList;
