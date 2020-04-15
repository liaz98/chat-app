import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';

class Main extends Component {

    state = { name: '' }
    onChangeText = name => this.setState({ name });
    onPress = () => {
        this.props.navigation.navigate('Chat', { name: this.state.name });
    }
   
    render() {
    
        return <View>
        
            <Text style={styles.text}>Enter your name:</Text>
            <TextInput
                onChangeText={this.onChangeText}
                style={styles.nameInput}
                placeholder="Enter Name"
                value={this.state.name}
            />
            <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
         
        </View>
    }
}
const offset = 24
const styles = StyleSheet.create({
    nameInput: {
        height: offset,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1
    },
    buttonText: {
        marginLeft: offset,
        fontSize: offset,
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Main;
