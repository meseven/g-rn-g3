import { StyleSheet, Text, TouchableOpacity } from "react-native";

type IProps = {
  user: {
    id: number;
    name: string;
  };
};

export function UserListItem({ user }: IProps) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>
        {user.id} - {user.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
