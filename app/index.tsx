import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Index  = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Index Screen</Text>
      <Link href="/(PublicStack)/splash">Splash</Link>
    </View>
  )
}

export default Index 