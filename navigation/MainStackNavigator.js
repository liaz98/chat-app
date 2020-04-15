import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../components/Main';
import Chat from '../components/Chat';
const AppNavigator = createStackNavigator(
      {
        Main: Main,
        Chat: Chat
      },
      {
        initialRouteName: 'Main',
      }
    );
  
  export default createAppContainer(AppNavigator);
