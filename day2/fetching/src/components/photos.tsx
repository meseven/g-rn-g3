import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../api/endpoints";

export function Photos() {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      refreshing={isFetching}
      onRefresh={() => refetch()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
