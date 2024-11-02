import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useAuth } from '../../context/AuthContext';
import { Link, useRouter } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    institutionName: '',
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();

  const submit = async () => {
    if (!form.institutionName || !form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const newAdmin = await createInstitutionAndUser(form);
      setUser(newAdmin);
      Alert.alert("Success", "Institution created and admin account created successfully");
      router.push('/'); // Redirect to admin dashboard after creation
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const createInstitutionAndUser = async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...userData, role: 'admin' });
      }, 1000);
    });
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center px-4 my-6 h-full'>
          <Text className='text-2xl text-white font-semibold mt-10'>
            Create Institution Account
          </Text>
          <FormField
            title="Institution Name"
            value={form.institutionName}
            handleChangeText={(e) => setForm({ ...form, institutionName: e })}
            otherstyles='mt-7'
          />
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherstyles='mt-7'
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Existing user?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
