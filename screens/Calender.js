import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Calender({navigation}) {
    return (
        <View style={styles.container}>
        <Text >Calender Screen</Text>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });