import { View, Text , Image} from 'react-native'
import React from 'react'
import "../global.css";

const profiledetails = () => {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <Image  source={require("../assets/images/icon.png")} 
      className="max-h-24 max-w-24 rounded-full" />
      <Text className="text-2xl font-bold">Andrés Fajardo</Text>
      <Text className="font-bold text-gray-400">✨ Estudiante ✨</Text>
    </View>
  )
}

export default profiledetails