import React, { Profiler } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import About from './About';
import Calender from "./Calender";
import Events from "./Events";
import Profile from './Profile';
import EditProfile from './EditProfile';

const HomeStack = createStackNavigator(); 

const AboutStack = createStackNavigator(); 

const ProfileStack = createStackNavigator(); 
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"

        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color}) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutStackScreen}
            options={{
              tabBarLabel: 'About',
              tabBarColor: '#009387',
              tabBarIcon: ({ color, }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
              tabBarBadge: 3,
            }}
          />
           <Tab.Screen
            name="Calender"
            component={Calender}
            options={{
              tabBarLabel: 'Calender',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
      
            }}
          />
           <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#009387',
              tabBarIcon: ({ color}) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
  
            }}
          />
         
        </Tab.Navigator>
    
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
	<HomeStack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#009387'}, headerTintColor: '#fff', headerTitleStyle:{
		fontWeight:'bold'
	}}} >
		<HomeStack.Screen name="Home" component={Home} options={{title:'Home', headerLeft: () => (
			<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
		) }} />
	</HomeStack.Navigator>

);

const AboutStackScreen = ({navigation}) => (
	<AboutStack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#009387'}, headerTintColor: '#fff', headerTitleStyle:{
		fontWeight:'bold'
	}}} >
		<AboutStack.Screen name="About" component={About} options={{headerLeft: () => (
			<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
		) }} />
	</AboutStack.Navigator>

);

const ProfileStackScreen = ({navigation}) => (
	<ProfileStack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#009387'}, headerTintColor: '#fff', headerTitleStyle:{
		fontWeight:'bold'
	}}} >
		<ProfileStack.Screen name="Profile" component={Profile} options={{headerLeft: () => (
			<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
		), headerRight: () => (
			<MaterialCommunityIcons.Button name="account-edit" size={25} backgroundColor="#009387" onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button> ) }} />

   <ProfileStack.Screen
   name="EditProfile"
   options={{
     title: 'Edit Profile',
   }}
   component={EditProfile}
 />
</ProfileStack.Navigator>

);
