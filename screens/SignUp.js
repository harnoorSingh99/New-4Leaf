
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
 
        return (
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/4LeafLogoBW.png')} />
                </View>

                <View style={styles.regContainer}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder='EMAIL ADDRESS'
                        placeholderTextColor='grey'
                        style={styles.input}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? <Feather name="check-circle" color="green" size={20} />: null}
                  
                </View>
                <View style={styles.regContainer}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />

                    <TextInput
                        placeholder='PASSWORD'
                        placeholderTextColor='grey'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.input}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                      <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                </View>
                <View style={styles.regContainer}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />

                    <TextInput
                        placeholder='CONFIRM PASSWORD'
                        placeholderTextColor='grey'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.input}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                      <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                </View>

                <View style={styles.altContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>---- or ----</Text>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('SignIn')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                  
                </View>

        

            </SafeAreaView>
        );
    }

export default SignUp;    

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        //borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    regContainer: {
        flexDirection: 'row',
        //alignItems: 'center',
      

    },
    altContainer: {
        alignItems: 'center',
        marginBottom: 60,
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginButton: {
        height: 40,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'black',
    },
    googleButton: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'black',
    },
    backButton: {
        height: 40,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'black',
    },
    button: {
        height: 40,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
    text: {
        fontSize: 15,
        color: 'black',
        margin: 30,
    },
    input: {
        height: 40,
        width: '90%',
        marginBottom: 30,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
    },
    logo: {
        width: 200,
        height: 200,
        margin: -15,
    },
})
