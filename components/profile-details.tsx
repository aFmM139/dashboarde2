      import { View, Text , Image, useColorScheme } from 'react-native'
      import React from 'react'
      import "../global.css";
      import IconButton from './IconButton';
      
      const profiledetails = () => {
        return (
          <View className="flex justify-center items-center bg-white w-screen h-screen">
      
           <Image  source={require("../assets/images/icon.png")} 
           className="max-h-24 max-w-24 rounded-full" />
           <Text className="text-2xl font-bold">Andrés Fajardo</Text>
           <Text className="font-bold text-gray-400">✨ Estudiante ✨</Text>
      
           <View className="flex flex-row gap-4 mt-4">
            <IconButton icon='instagram' pulsar={()=>console.log("instagram")} color="pink"></IconButton>
            <IconButton icon='whats-app' pulsar={()=>console.log("whatsapp")} color="green"></IconButton>
            <IconButton icon='twitter' pulsar={()=>console.log("twitter")} color="blue"></IconButton>
            <IconButton icon='tik-tok' pulsar={()=>console.log("tiktok")} ></IconButton>
           </View>
      
          </View>
        )
      }
      
      export default profiledetails