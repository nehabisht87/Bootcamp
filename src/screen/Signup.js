import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, View, TextInput, Image, TouchableOpacity, Button, Alert } from 'react-native'
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Signup extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
    };

    setData = async() => {
        await AsyncStorage.setItem('name', this.state.name)
        await AsyncStorage.setItem('email', this.state.email)
        await AsyncStorage.setItem('phone', this.state.phone)
        console.log("data saved");
        this.props.navigation.navigate('HomeScreen')
        // console.log(this.state.name);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.signupForm}>
                    <Text style={styles.heading}>Let's Get Started!</Text>
                    <Text style={styles.description}>Create an account to Q Allure to get all features</Text>

                    <TouchableOpacity style={styles.textInputContainer}>
                        <Image style={styles.image} source={require('../components/assets/user.png')} />
                        <TextInput style={styles.textInput} placeholder="Full Name" value={this.state.name} onChangeText={(text)=>{this.setState({name: text})}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textInputContainer}>
                        <Image style={styles.image} source={require('../components/assets/email.png')} />
                        <TextInput style={styles.textInput} placeholder="Email" value={this.state.email} onChangeText={(text)=>{this.setState({email: text})}}  />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textInputContainer}>
                        <Image style={styles.image} source={require('../components/assets/phone.png')} />
                        <TextInput style={styles.textInput} placeholder="Phone" value={this.state.phone} onChangeText={(text)=>{this.setState({phone: text})}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textInputContainer}>
                        <Image style={styles.image} source={require('../components/assets/password.png')} />
                        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" value={this.state.password} onChangeText={(text)=>{this.setState({password: text})}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.textInputContainer}>
                        <Image style={styles.image} source={require('../components/assets/show-pass.png')} />
                        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Confirm Password" value={this.state.confirm_password} onChangeText={(text)=>{this.setState({confirm_password: text})}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setData()} style={styles.createButtonView}>
                        <Text style={styles.createButtonText}>CREATE</Text>
                    </TouchableOpacity>

                    <View style={styles.loginView}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>Already have an account?</Text>
                        <Button title="Login here" />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },
    signupForm: {
        marginVertical: 32,
        marginHorizontal: 20,
        alignContent: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F8F8FF',
        borderRadius: 40,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 80,
        paddingHorizontal: 55,
    },
    description: {
        marginTop: 10,
        fontSize: 15,
        color: 'grey',
        paddingHorizontal: 15,
        paddingBottom: 50,
    },
    textInputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    image: {
        width: 20,
        height: 20,
        marginHorizontal: 25,
        marginTop: 18,
        position: 'absolute',
        zIndex: 2,
    },
    textInput: {
        width: width - 50,
        height: 60,
        backgroundColor: '#fff',
        paddingLeft: 60,
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 18,
        color: 'black',
    },
    createButtonView: {
        marginHorizontal: 65,
    },
    createButtonText: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginView: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 30,
        marginHorizontal: 30,
    },
})
