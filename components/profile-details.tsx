import { View, Text , Image} from 'react-native'
import React from 'react'

const profiledetails = () => {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <Image className="min-h min" source={require("../assets/images/icon.png")}></Image>
    </View>
  )
}

export default profiledetails