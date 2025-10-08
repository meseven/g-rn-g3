import { View } from "react-native";
import { Users } from "../features/home/users";

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Users />
    </View>
  );
}
