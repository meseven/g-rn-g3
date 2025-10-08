import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { User } from "../../types/user";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";

type IProps = {
  user: User;
};

export function UserItem({ user }: IProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate("UserDetail", { id: user.id, name: user.name })}
    >
      <Text style={styles.btnText}>{user.name}</Text>
    </TouchableOpacity>
  );
}


