import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    institute: "",
    password: "",
  });

  const submit = async () => {
    // Add the submit function if needed
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[260px] h-[198px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold ">
            Sign Up 
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Institute"
            value={form.institute}
            handleChangeText={(e) => setForm({ ...form, institute: e })}
            otherStyles="mt-7"
            
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Existing user?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
