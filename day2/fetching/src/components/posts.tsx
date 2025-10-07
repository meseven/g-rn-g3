import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/endpoints";

export function Posts() {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
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
        <TouchableOpacity style={styles.item}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
  },
});
