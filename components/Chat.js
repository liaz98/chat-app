import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire'

class Chat extends Component {  
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
      });
      state = {
        messages: [],
      };
      componentDidMount() {
        Fire.shared.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        );
    }
      componentWillUnmount() {
        Fire.shared.off();
      }
      get user(){
          return{
              name:this.props.navigation.state.params.name,
              _id:Fire.shared.uid,
          }
      }
    render() {
        return (
            <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
        )
}}
const offset = 24
const styles = StyleSheet.create({
    nameInput: {
        height: offset,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1
    },
    buttonText:{
        marginLeft:offset,
        fontSize:offset,
    }
});
export default Chat

