// app/addndel/resources.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../constants'; 

const Resources = () => {
  const [refreshing, setRefreshing] = useState(false);

  const resources = [
    { id: '1', title: 'Meeting Room A', description: 'Capacity: 10 people' },
    { id: '2', title: 'Projector', description: 'Available in main hall' },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    // Add refetch logic here if needed
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full relative">
      <FlatList
        data={resources}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View className="bg-secondary p-4 rounded-lg mb-4 w-full shadow-lg">
            <Text className="text-white font-psemibold text-base">{item.title}</Text>
            <Text className="text-gray-200 font-pregular text-sm mt-2">{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-400 font-pregular text-center">No resources found.</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      
      <TouchableOpacity
        className="absolute bottom-10 right-10"
        onPress={() => {
          // Navigate to add resource screen or perform other actions
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

export default Resources;
