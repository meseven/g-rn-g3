import { useQuery } from "@tanstack/react-query";
import { GET_POST_BY_ID } from "../../api/endpoints";
import { StyleSheet, Text, View } from "react-native";
import { Comments } from "./comments";

type IProps = {
  id: number;
};

export function PostDetail({ id }: IProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => GET_POST_BY_ID(id),
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error occurred</Text>;

  return (
    <View style={{ gap: 16, flex: 1 }}>
      <Text style={styles.body}>{data?.body}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Comments</Text>
        <Comments postId={id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 12 },
  body: { fontSize: 16 },
});
