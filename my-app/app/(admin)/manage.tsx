// app/admin/manage.js
import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

const Manage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-primary h-full">
      <Text className="text-2xl font-semibold text-white">Manage</Text>
      
      <CustomButton 
        title="Users"
        textStyles="text-white"
        handlePress={() => router.push('/(addndel)/users')}
        containerStyles="mt-7 w-full"
      />

      <CustomButton
        title="Resources"
        textStyles="text-white"
        handlePress={() => router.push('/(addndel)/resources')}
        containerStyles="mt-7 w-full"
      />
    </View>
  );
};

export default Manage;
