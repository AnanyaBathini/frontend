
import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
//import { useRouter } from 'expo-router';

const Resources = () => {
  //const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    timeSlot: null,
    capacity: null,
  });

  // Sample resource data
  const allResources = [
    { id: '1', title: 'Meeting Room A', description: 'Capacity: 10 people', capacity: 10, timeSlot: '9:00 AM - 11:00 AM' },
    { id: '2', title: 'Projector', description: 'Available in main hall', capacity: 0, timeSlot: 'N/A' },
    { id: '3', title: 'Conference Room B', description: 'Capacity: 20 people', capacity: 20, timeSlot: '1:00 PM - 3:00 PM' },
    
  ];

  // Filtered resources based on search and selected filters
  const filteredResources = allResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTimeSlot = selectedFilters.timeSlot ? resource.timeSlot === selectedFilters.timeSlot : true;
    const matchesCapacity = selectedFilters.capacity ? resource.capacity >= selectedFilters.capacity : true;
    return matchesSearch && matchesTimeSlot && matchesCapacity;
  });

  const handleBookResource = (/*resource*/) => {
    // Navigate to a booking screen or handle booking
    //router.push(`/booking/${resource.id}`);
  };

  // const handleFilterChange = (field, value) => {
  //   setSelectedFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  // };

  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Search and Filter Section */}
      <View className="px-4 pt-6 pb-4">

        <TextInput
          placeholder="Search resources..."
          placeholderTextColor="#fff"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="bg-secondary px-4 py-2 rounded-md text-white"
        />
        
        
        {/* Filter Bar */}
        <View className="flex-row justify-between mt-4">
          {/* Capacity Filter */}
          <TouchableOpacity
            className="bg-secondary p-3 rounded-lg"
            onPress={() => {}//handleFilterChange('capacity', 10)
              }
          >
            <Text className="text-white">Capacity 10+</Text>
          </TouchableOpacity>

          {/* Time Slot Filter */}
          <TouchableOpacity
            className="bg-secondary p-3 rounded-lg"
            onPress={() => {}//handleFilterChange('timeSlot', '9:00 AM - 11:00 AM')
              }
          >
            <Text className="text-white">9:00 - 11:00 AM</Text>
          </TouchableOpacity>

          {/* Reset Filter */}
          <TouchableOpacity
            className="bg-red-500 p-3 rounded-lg"
            onPress={() => setSelectedFilters({ timeSlot: null, capacity: null })}
          >
            <Text className="text-white">Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Resource List */}
      <FlatList
        data={filteredResources}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-secondary p-4 rounded-lg mb-4 shadow-lg"
            onPress={() => handleBookResource()}
          >
            <Text className="text-white font-psemibold text-base">{item.title}</Text>
            <Text className="text-gray-200 font-pregular text-sm mt-2">{item.description}</Text>
            <Text className="text-gray-400 font-pregular text-xs mt-1">Capacity: {item.capacity}</Text>
            <Text className="text-gray-400 font-pregular text-xs">Time Slot: {item.timeSlot}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-400 font-pregular text-center">
              No resources match your search or filter criteria.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Resources;
