import React from 'react';
import { Text } from 'react-native';

interface CustomTextProperties{
  value: string;
  variant?: "normal" | "title" | "subtitle" | "experienceText";
}

const CustomText = ({value, variant = "normal"}: CustomTextProperties) => {
  return (
      <Text className={selectVariable(variant)}>{value}</Text>
  )
}

export default CustomText

function selectVariable(variante:string){
    switch(variante){
        case "title":
            return "text-2xl font-bold text-black"
        case "subtitle":
            return "text-xl font-bold text-gray-500"
        case "experienceText":
            return "text-xl font-bold justify-center text-white"
        default:
            return "text-base font-normal text-gray-700"
    }
}