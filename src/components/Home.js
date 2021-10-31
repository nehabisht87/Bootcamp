import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';

class Home extends Component {
    apiData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                return this.props.fetchApi(data);
            });
    };
    componentDidMount() {
        this.apiData();
    }
    navToDetails = (data) => {
        this.props.navigation.navigate('Details', data)
    }
    render() {
        const Item = ({item, i}) => (
            <TouchableOpacity onPress={() => this.navToDetails(item)}> 
                <View key={i} style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>
            </TouchableOpacity>

        );
        const renderItem = ({ item }) => (
            <Item item={item} />
        )
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.flatlistContainer}>
                    <FlatList
                        data={this.props.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                {/* <Text>{JSON.stringify(this.props.data)}</Text> */}
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} >
                    <Text>
                        Go to DetailsScreen
                    </Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.data,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchApi: value => dispatch({ type: 'UPDATE_ITEM', payload: { value } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FFF2EA',
        },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#ECECF1',
    },
    title: {
        fontSize: 25,
        backgroundColor: '#ECECF1',
        color: '#7F3B55',
        fontWeight: 'bold',
    },
    body: {
        color: 'black',
        fontSize: 15,
    }
})