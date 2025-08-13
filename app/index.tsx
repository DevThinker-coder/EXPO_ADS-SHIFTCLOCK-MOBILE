import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index  = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Index Screen</Text>
      <Link href="(PublicNavigator)/splash">Splash</Link>
    </View>
  )
}

export default Index 