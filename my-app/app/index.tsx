
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";


export default function App ()  {
  

 

  return (
    
    <SafeAreaView className="bg-primary h-full">
      

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="w-[260px] h-[198px] mt-1"
            resizeMode="contain"
          />

          
          <View className="relative mt-4">
            <Text className="text-2xl text-white font-bold text-center ">
              Optimize your workspace with {' '}
              <Text className="text-secondary">Queue</Text>
            </Text>

            
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
           Empower your teams with our smart resource scheduler and improve efficiency
          </Text>

          <CustomButton
            title="Log in"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              or Create Institution?
            </Text>
            <Link href="/home" className="text-lg font-psemibold text-secondary ">Sign Up
            </Link>

          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
    
  );
};


