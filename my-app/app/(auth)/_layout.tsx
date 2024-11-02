import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../context/AuthContext';

const AuthLayout = () => {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        router.replace('../admin/home');
      } else {
        router.replace('../user/home');
      }
    }
  }, [user, router]);

  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        {user && user.role === 'admin' && (
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        )}
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
