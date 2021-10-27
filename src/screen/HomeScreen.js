import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
    }
        getData = async() => {
           const username = await AsyncStorage.getItem('name')
           const useremail = await AsyncStorage.getItem('email')
           const userphone = await AsyncStorage.getItem('phone')

           this.setState({
               name: username,
               email: useremail,
               phone: userphone,
           });
        }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginHorizontal: 90}}>
                <Text style={styles.user}>Name: </Text>
                <Text style={styles.userDetail}>{this.state.name}</Text>
                </View>
                <View style={{flexDirection: 'row', marginHorizontal: 90}}>
                <Text style={styles.user}>E-mail: </Text>
                <Text style={styles.userDetail}>{this.state.email}</Text>
                </View>
                <View style={{flexDirection: 'row', marginHorizontal: 90}}>
                <Text style={styles.user}>Phone: </Text>
                <Text style={styles.userDetail}>{this.state.phone}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    user: {
        fontSize: 20, 
        fontWeight: 'bold',
    },
    userDetail: {
        fontSize: 20, 
        color: 'green',
    }
})
