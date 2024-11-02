import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from "expo-router";
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useAuth();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const loggedInUser = await signInUser(form);
      setUser(loggedInUser);
      // Redirect based on role
      if (loggedInUser.role === 'admin') {
        router.push('/');
      } else {
        router.push('/');
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const signInUser = async (credentials: { email: any; password?: string; }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dummy user for demonstration; replace with actual login logic
        resolve({ email: credentials.email, role: credentials.email.includes('admin') ? 'admin' : 'user' });
      }, 1000);
    });
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
          <Text className='text-2xl text-white font-semibold mt-10'>
            Login to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
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
