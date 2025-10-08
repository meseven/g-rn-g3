import { useQuery } from "@tanstack/react-query";
import { GET_COMMENTS_BY_POST_ID } from "../../../api/endpoints";
import { FlatList, Text } from "react-native";
import { CommentItem } from "./comment-item";

type IProps = {
  postId: number;
};

export function Comments({ postId }: IProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => GET_COMMENTS_BY_POST_ID(postId),
  });

  if (isLoading) return <Text>Loading comments...</Text>;
  if (error) return <Text>Error loading comments</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CommentItem comment={item} />}
    />
  );
}
