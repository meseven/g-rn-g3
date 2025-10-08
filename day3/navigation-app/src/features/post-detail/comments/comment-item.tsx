import { Text, View } from "react-native";
import { Comment } from "../../../types/comment";

type IProps = {
  comment: Comment;
};

export function CommentItem({ comment }: IProps) {
  return (
    <View
      style={{
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
      }}
    >
      <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
        {comment.email.split("@")[0]}
      </Text>
      <Text>{comment.body}</Text>
    </View>
  );
}
