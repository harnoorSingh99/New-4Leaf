import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, Button, TouchableOpacity } from 'react-native';


const Welcome = ({navigation}) => {

 
  
        return (
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/4LeafLogoBW.png')} />
                    <Text style={styles.sloganText}>CONNECT. LAUGH. LEARN. GROW.</Text>
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignIn')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignUp')}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <Image style={styles.map} source={require('../assets/icon.png')} />
                </View>

            </SafeAreaView>
        );
    }

    export default Welcome;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    optionsContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
    sloganText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
    },
    logo: {
        height: 200,
        width: 200,
        margin: -15,
    },
    map: {
        height: 150,
        width: 150,
        marginTop: 30,
    },
})
