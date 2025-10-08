import { StaticScreenProps } from "@react-navigation/native";
import { Text, View } from "react-native";
import { PostDetail } from "../features/post-detail";

type IProps = StaticScreenProps<{
  id: number;
  title: string;
}>;

export function PostDetailScreen({ route }: IProps) {
  return (
    <View style={{ padding: 16, flex: 1 }}>
      <PostDetail id={route.params.id} />
    </View>
  );
}
