import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
        <Text >Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("About")}
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