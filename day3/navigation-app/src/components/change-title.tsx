import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export function ChangeTitle() {
  const navigation = useNavigation();

  return (
    <Button
      title="Change title"
      onPress={() => navigation.setOptions({ title: "Updated!" })}
    />
  );
}
