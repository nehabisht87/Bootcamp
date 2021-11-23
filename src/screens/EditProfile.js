import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class EditProfile extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        birthDate: '',
    };
    
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                style={styles.container}>
                <View>
                    <Image style={styles.avatar} source={require('../assets/user-avatar.png')} />
                    <TextInput
                        // value={this.state.name}
                        // underlineColorAndroid = 'grey'
                        placeholder="Name"
                        // onChangeText={this.changeValue}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={styles.TextInputContainer}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Senior Designer</Text>
                </View>

                <View>
                    <Text style={{ textAlign: 'left', color: 'grey' }}>Email Address</Text>
                    <TextInput
                        // value={email}
                        underlineColorAndroid='grey'
                        placeholder="Email Address"
                        // onChangeText={setEmail}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={styles.TextInputContainer}
                    />
                </View>

                <View>
                    <Text style={{ textAlign: 'left', color: 'grey' }}>Username</Text>
                    <TextInput
                        // value={username}
                        underlineColorAndroid='grey'
                        placeholder="username"
                        // onChangeText={}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={styles.TextInputContainer}
                    />
                </View>
                <View>
                    <Text style={{ textAlign: 'left', color: 'grey' }}>Password</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            // value={password}
                            placeholder=""
                            underlineColorAndroid='grey'
                            // onChangeText={}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={styles.TextInputContainer}
                        />
                        <Image style={styles.icons} source={(require('../assets/hide.png'))} />
                    </View>
                </View>

                <View>
                    <Text style={{ textAlign: 'left', color: 'grey' }}>Birth Date (Optional)</Text>
                    <TextInput
                        // value={birthdate}
                        placeholder="14 September 1994"
                        underlineColorAndroid='grey'
                        // onChangeText={}
                        autoCorrect={false}
                        autoCapitalize="none"
                        style={styles.TextInputContainer}
                    />

                </View>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={() => handleSubmit(navigation)}>
                    <Text style={styles.Btn}>Submit</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginVertical: 30 }}>
                    <Text >Joined </Text>
                    <Text style={{ fontWeight: 'bold' }}>21 Jan 2020</Text>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    TextInputContainer: {
        width: width - 50,
        height: 50,
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'center',
        textAlign: 'left',
        borderRadius: 50,
        marginVertical: 15,
        color: 'black',
    },
    Input: {
        paddingRight: 3,
    },
    ButtonContainer: {
        backgroundColor: 'blue',
        width: width - 250,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    Btn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    avatar: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 80,
        width: 80,
    },
    icons: {
        width: 20,
        height: 20,
        marginHorizontal: 25,
        marginTop: 16,
        position: 'absolute',
        zIndex: 2,
        tintColor: '#888',
    },
});

export default EditProfile;
