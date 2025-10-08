import { View } from "react-native";
import { Users } from "../features/home/users";
import { ChangeTitle } from "../components/change-title";

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Users />
      <ChangeTitle />
    </View>
  );
}
