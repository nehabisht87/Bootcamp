import React, { Component } from 'react'
import { Text, Alert, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { inject, observer } from 'mobx-react';

@inject('addNoteStore')
@observer
export default class HomeScreen extends Component {
    deleteDetail = i => {
        Alert.alert('Hold on', 'Are you sure you want to delete', [
            {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => {
                    this.props.addNoteStore.deleteData(i);
                },
                style: 'destructive',
            },
        ]);
    };
    render() {
        return (
            <View style={styles.container}>
                {this.props.addNoteStore.data.map((item, i) => (
                    <View key={i}>
                        <TouchableOpacity onLongPress={() => {
                            this.deleteDetail(i);
                        }}
                            onPress={() => {
                                this.props.navigation.navigate('AddNote', {
                                    id: i,
                                    title: item.title,
                                    description: item.description,
                                });
                            }}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AddNote", {
                    id: '',
                    title: '',
                    description: '',
                }
                )}
                    style={{
                        alignSelf: 'flex-end', position: 'absolute', bottom: 30, borderRadius: 20, backgroundColor: '#3aae6d',
                    }}>
                    <Text style={styles.buttonText}>+ Add new Note</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonText: {
        textAlign: 'right',
        padding: 7,
    },
})
