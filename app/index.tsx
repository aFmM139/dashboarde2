import { View } from "react-native";
import ProfileDetails from "@/components/profile-details";
import MoreDetails from "@/components/MoreDetails";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 flex-col w-screen h-screen bg-white">
      <ProfileDetails />
      <MoreDetails />
    </View>
  );
}