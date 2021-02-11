import React, { useState, useEffect} from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import {  View, ActivityIndicator, Text } from 'react-native';

 import { createDrawerNavigator } from '@react-navigation/drawer';

import { firebaseConfig } from '../components/config';


import MainTabScreen from "../screens/MainTabScreen";
import { DrawerContent } from "../screens/DrawerContent";
import Welcome from "../screens/Welcome";
import RootStackScreen from "../screens/RootStackScreen";
import { AuthContext } from '../components/context';


 
const Drawer = createDrawerNavigator();


const AppNavigator = () => {

	const [isLoading, setIsLoading]= useState(true);
	const [userToken, setUserToken] = useState(null);

	 const authContext = React.useMemo(() => ({
	 	signIn: () => {
	 		setUserToken('fkwj');
	 		setIsLoading(false);
	 	},
	 	signOut: () => {
	 		setUserToken(null);
	 		setIsLoading(false);
	 	},
	 	signUp: () => {
	 		setUserToken('fkwj');
	 		setIsLoading(false);
	 	},
	 }));

	 useEffect(() => {
	 	setTimeout(() => {
	 		setIsLoading(false);
	 	}, 1000);
	 }, []);
	
		if(isLoading) {
			return(
				<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
					<ActivityIndicator size="large" color="gray" />
					<Text>Loading</Text>
				</View>
	 	);
	 }
	

		return (
			<AuthContext.Provider value={authContext}>
				
			<NavigationContainer >
				{ userToken !== null ? (
					 <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
					 <Drawer.Screen name="Home" component={MainTabScreen} />
				 </Drawer.Navigator> 

				)
				: <RootStackScreen />
				}
				

		
				  {/**/}
		
			</NavigationContainer>

			</AuthContext.Provider>
		


		
		);
	
		}
  
export default AppNavigator;