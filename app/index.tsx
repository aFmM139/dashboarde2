import { Text, View } from "react-native";
import ProfileDetails from "@/components/profile-details";



import "../global.css";
export default function Index() {
  return (
    <View className="flex justify-center items-center bg-stone-800 w-screen h-screen">
      <Text className="text-white bold text-xl"></Text>
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View></View>
  );
}
