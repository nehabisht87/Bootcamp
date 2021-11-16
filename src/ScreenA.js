import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

const ScreenA = ({navigation}) => {
  return (
    <View style={styles.goToLocation}>
    <Button
      title="Goto Location"
      onPress={() => navigation.navigate('Location')}
    />
  </View>
  )
}

export default ScreenA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goToLocation: {
    marginTop: 30,
  },
})
