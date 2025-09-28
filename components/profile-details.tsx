    import { View, Text , Image, useColorScheme } from 'react-native'
    import React from 'react'
    import "../global.css";
    import IconButton from './IconButton';
    import CustomText from './CustomText';
      
      const profiledetails = () => {
        return (
          <View className="flex justify-center items-center bg-white w-screen h-screen">
      
           <Image  source={require("../assets/images/icon.png")} 
           className="max-h-24 max-w-24 rounded-full" />
           <CustomText value="Andrés Fajardo" variant="title"></CustomText>
           <CustomText value="✨ Estudiante ✨" variant="subtitle"></CustomText>
      
           <View className="flex flex-row gap-4 mt-4">
            <IconButton icon='instagram' enlace='https://www.instagram.com/andres_fa/' pulsar={()=>console.log("instagram")} color= "pink"></IconButton>
            <IconButton icon='whats-app' pulsar={()=>console.log("whatsapp")} color= "green"></IconButton>
            <IconButton icon='twitter' pulsar={()=>console.log("twitter")} color= "blue"></IconButton>
            <IconButton icon='tik-tok' pulsar={()=>console.log("tiktok")} ></IconButton>
           </View>
      
          </View>
        )
      }
      
      export default profiledetails