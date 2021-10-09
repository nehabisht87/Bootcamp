import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            setTime: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ setTime: false })
        }, 5000);

    }
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.headText}>
                    Please wait Background Image is loading
                </Text>
                {
                    this.state.setTime ?
                        <ActivityIndicator
                            size='large'
                            color='blue' />
                        :
                        <View>
                            <ImageBackground source={require('../assets/landscape.jpeg')} style={styles.image}></ImageBackground>
                        </View>
                }
            </View>

        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headText: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 20
    },
    image: {
        height: 1000,
        width: 500,
    },
});
export default Home;

