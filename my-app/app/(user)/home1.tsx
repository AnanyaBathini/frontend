import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { icons } from "../../constants";
import { Image } from 'react-native';

const Home = () => {
  const router = useRouter();

  // Dummy data for recently booked resources
  const [recentlyBooked, setRecentlyBooked] = useState([
    { id: '1', title: 'Meeting Room A', timeSlot: '9:00 AM - 11:00 AM', date: '2023-10-25' },
    { id: '2', title: 'Projector', timeSlot: '1:00 PM - 2:00 PM', date: '2023-10-24' },
  ]);

  // Fetch recently booked resources from backend
  useEffect(() => {
    const fetchRecentlyBooked = async () => {
      // Integrate backend API here to fetch recently booked resources
      // setRecentlyBooked(await fetchBookedResources());
    };

    fetchRecentlyBooked();
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Page Header */}
      <View className="flex my-6 px-4 space-y-6">
        <Text className="text-2xl font-psemibold text-white">
          Recently Booked Resources
        </Text>
      </View>

      {/* Recently Booked List */}
      <FlatList
        data={recentlyBooked}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View className="bg-secondary p-4 rounded-lg mb-4 shadow-lg">
            <Text className="text-white font-psemibold text-base">{item.title}</Text>
            <Text className="text-gray-200 font-pregular text-sm mt-2">
              {item.timeSlot}
            </Text>
            <Text className="text-gray-400 font-pregular text-xs mt-1">
              Date: {item.date}
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-400 font-pregular text-center">
              No recently booked resources available.
            </Text>
          </View>
        )}
      />

      {/* Book a Resource Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-secondary p-4 rounded-full shadow-lg text-white"
        onPress={() => router.push('/resources')}
      >
        Book resource
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
