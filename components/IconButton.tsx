
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, Linking } from 'react-native';
import "../global.css";

interface IconButtonProps {
    pulsar?: () => void;
    icon: string;
    color?: string;
    enlace?: string;
}

const IconButton = ({ icon, pulsar, enlace, color = "black" }: IconButtonProps) => {
    const handlePress = () => {
        if (enlace) {
            Linking.openURL(enlace);
        } else if (pulsar) {
            pulsar();
        }
    };

    return (
        <Pressable onPress={handlePress} className='rounded-xl p-3 border-b-4 border-r-2 border-gray-500'>
            <AntDesign name={icon as any} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton;
