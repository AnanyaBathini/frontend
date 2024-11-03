// app/addndel/users.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../constants';

const Users = () => {
  const [refreshing, setRefreshing] = useState(false);

  const users = [
    { id: '1', name: 'Alice Johnson', role: 'Project Manager' },
    { id: '2', name: 'Bob Smith', role: 'Developer' },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    // Add refetch logic here if needed
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full relative">
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View className="bg-secondary p-4 rounded-lg mb-4 w-full shadow-lg">
            <Text className="text-white font-psemibold text-base">{item.name}</Text>
            <Text className="text-gray-200 font-pregular text-sm mt-2">{item.role}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-400 font-pregular text-center">No team members found.</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      
      <TouchableOpacity
        className="absolute bottom-10 right-10"
        onPress={() => {
          // Navigate to add user screen or perform other actions
        }}
      >
        <Image
          source={icons.plus} 
          style={{ width: 64, height: 64 }} 
          resizeMode="contain"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Users;
