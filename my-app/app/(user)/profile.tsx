import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";

const Profile = () => {
  const logout = async () => {
    // Add your sign-out logic here
    // await signOut();
    // Redirect to sign-in page
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 justify-start items-end p-4">
        <TouchableOpacity onPress={logout}>
          <Image
            source={icons.logout} // Your logout icon
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
