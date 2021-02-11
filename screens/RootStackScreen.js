import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Welcome" component={Welcome}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
        <RootStack.Screen name="SignIn" component={SignIn}/>
    </RootStack.Navigator>
);

export default RootStackScreen;