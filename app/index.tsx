import { requireNativeComponent, Text, View } from "react-native";
import ProfileDetails from "@/components/profile-details";
import MoreDetails from "@/components/MoreDetails";
import "../global.css";

export default function Index() {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-1/2">
    <View className="flex justify-center items-start bg-white w-screen h-1/2">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View></View>
  );
}
