
import AntDesign from '@expo/vector-icons/AntDesign';

import { Pressable } from 'react-native';
import "../global.css";

interface IconButtonProps {
    pulsar: () => void;//metodo
    icon: string;//Cadena
    color?: string;
    enlace?: string;//Cadena opcional
}

const IconButton =({icon,pulsar,enlace, color = "black"}: IconButtonProps)=>{
    return(
        <Pressable onPress={pulsar}>
            <AntDesign name={icon as any} size={24} color={color} />
        </Pressable>
    )
}
export default IconButton;