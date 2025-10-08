import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Profile Settings"
        onPress={() => navigation.navigate("ProfileSettings")}
      />
    </View>
  );
}
