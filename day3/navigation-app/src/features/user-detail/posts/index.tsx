import { FlatList, StyleSheet, Text, View } from "react-native";
import { GET_POSTS_BY_USER_ID } from "../../../api/endpoints";
import { useQuery } from "@tanstack/react-query";
import { PostItem } from "./post-item";

type IProps = {
  userId: number;
};

export function Posts({ userId }: IProps) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => GET_POSTS_BY_USER_ID(userId),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error occurred</Text>;
  }

  return (
    <View>
      <Text style={styles.title}>Posts ({data?.length})</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", margin: 12 },
});
