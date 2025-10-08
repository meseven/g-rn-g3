import { StaticScreenProps } from "@react-navigation/native";
import { View } from "react-native";
// import { Profile } from "../features/user-detail/profile";
import { Posts } from "../features/user-detail/posts";

type IProps = StaticScreenProps<{
  id: number;
  name: string;
}>;

export function UserDetailScreen({ route }: IProps) {
  const { id } = route.params;

  return (
    <>
      {/* <Profile id={id} /> */}
      <Posts userId={id} />
    </>
  );
}
