import React, { Component } from 'react'
import { TextInput, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react';

@inject('addNoteStore')
@observer
export default class Note extends Component {
    state = {
        title: this.props.route.params.title,
        description: this.props.route.description,
        id: this.props.route.params.id,
    }
    changeTitle = (text) => {
        this.setState({
            title: text
        })
    }
    changeDesc = (text) => {
        this.setState({
            description: text
        })
    }
    saveData = (title, description, id) => {
        if (this.props.route.params.title == '') {
            this.props.addNoteStore.saveData(title, description, id);
        }
        else {
            this.props.addNoteStore.updateData(title, description, id);
        }
        this.props.navigation.navigate("HomeScreen")
        // console.log("hgvhhk")
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputTitle} placeholder="Enter Title" value={this.state.title} onChangeText={(text) => this.changeTitle(text)} />
                <TextInput style={styles.textInputDesc} placeholder="Enter Description" value={this.state.description} onChangeText={(text) => this.changeDesc(text)} />
                <TouchableOpacity style={{alignSelf: 'flex-end', position: 'absolute', bottom: 20 }} onPress={() => this.saveData(this.state.title, this.state.description)}>
                    <Image source={require('../assets/check.png')} style={{ height: 40, width: 40}} />                
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInputTitle: {
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        height: 50,
        borderWidth: 0.25,
        color: 'black',
        fontWeight: 'bold',
    },
    textInputDesc: {
        marginHorizontal: 10,
        height: 150,
        borderWidth: 0.25,
        // marginBottom: 50,
        color: 'black',
    },
})
