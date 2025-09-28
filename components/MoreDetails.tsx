import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'
import IconButton from './IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="Skill" variant="subtitle"></CustomText>
      <View className="flex-row justify-center items-center gap-4">
            <IconButton icon='android' pulsar={()=>console.log("android")} color= "darkgreen"></IconButton>
            <IconButton icon='apple' pulsar={()=>console.log("apple")} color= "white"></IconButton>
            <IconButton icon='java' pulsar={()=>console.log("code")} color= "#EAEDB4"></IconButton>
            <IconButton icon='experiment' pulsar={()=>console.log("prograMovil")} color="#EDB4B4"></IconButton>
      </View>
      <CustomText value="Experiencia" variant="subtitle"></CustomText>
      <CustomText value="Seniors" variant="experienceText"></CustomText>
    </View>
  )
}

export default MoreDetails