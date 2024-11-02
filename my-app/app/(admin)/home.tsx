import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { images } from "../../constants";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  
  const resources = [
    { id: '1', title: 'Meeting Room A', description: 'Capacity: 10 people' },
    { id: '2', title: 'Projector', description: 'Available in main hall' },
  ];

  const users = [
    { id: '1', name: 'Alice Johnson', role: 'Project Manager' },
    { id: '2', name: 'Bob Smith', role: 'Developer' },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    // Add any refetch logic here if needed
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={null} // Main FlatList doesn't render items directly
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-8">
              <View>
                <Text className="font-pmedium text-sm text-gray-200">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Organization Dashboard
                </Text>
              </View>
              
            </View>

            {/* Resources Section */}
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-psemibold text-gray-300 mb-3">
                Resources Added
              </Text>
              <FlatList
                data={resources}
                keyExtractor={(item) => item.id}
                horizontal
                contentContainerStyle={{ paddingVertical: 8 }}
                renderItem={({ item }) => (
                  <View className="bg-secondary p-4 rounded-lg mr-4 w-60 shadow-lg">
                    <Text className="text-white font-psemibold text-base">
                      {item.title}
                    </Text>
                    <Text className="text-gray-200 font-pregular text-sm mt-2">
                      {item.description}
                    </Text>
                  </View>
                )}
              />
            </View>

            {/* Users Section */}
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-psemibold text-gray-300 mb-3">
                Team Members
              </Text>
              <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                horizontal
                contentContainerStyle={{ paddingVertical: 8 }}
                renderItem={({ item }) => (
                  <View className="bg-secondary p-4 rounded-lg mr-4 w-60 shadow-lg">
                    <Text className="text-white font-psemibold text-base">
                      {item.name}
                    </Text>
                    <Text className="text-gray-200 font-pregular text-sm mt-2">
                      {item.role}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex items-center justify-center h-full">
            <Text className="text-gray-400 font-pregular text-center">
              No resources or users found for this institution.
            </Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
