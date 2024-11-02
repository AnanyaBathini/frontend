import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // Your submit function here
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 h-full'>
          <Image 
            source={images.logo}
            resizeMode='contain' 
            className='w-[260px] h-[198px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Login 
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherstyles='mt-7'
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherstyles='mt-7'
          />
          <CustomButton
            title="Sign In"
            handlePress={submit} 
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              or Create Institution?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
