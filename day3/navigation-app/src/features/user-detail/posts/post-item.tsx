import { StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import { Post } from "../../../types/post";
import { styles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";

type IProps = {
  post: Post;
};

export function PostItem({ post }: IProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() =>
        navigation.navigate("PostDetail", {
          id: post.id,
          title: post.title,
        })
      }
    >
      <Text style={styles.btnText}>{post.title}</Text>
    </TouchableOpacity>
  );
}
