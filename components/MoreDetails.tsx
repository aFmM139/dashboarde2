import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'
import IconButton from './IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="Skill" variant="subtitle"></CustomText>
      <View className="flex-row justify-center items-center gap-4">
            <IconButton icon='android' enlace='https://www.android.com/intl/es_es/' color= "darkgreen"></IconButton>
            <IconButton icon='apple' enlace='https://www.apple.com/la/' color= "white"></IconButton>
            <IconButton icon='java' enlace='https://www.java.com/es/' color= "#EAEDB4"></IconButton>
            <IconButton icon='experiment' enlace='https://firebase.google.com/?hl=es-419' color="#EDB4B4"></IconButton>
      </View>
      <CustomText value='   ' variant='title'></CustomText>
      <CustomText value="Experiencia" variant="subtitle"></CustomText>
      <View className="items-center">
        <CustomText value="Seniors" variant="experienceText"></CustomText>
      </View>
    </View>
  )
}

export default MoreDetails