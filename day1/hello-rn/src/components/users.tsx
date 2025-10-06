import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

type User = {
  id: number;
  name: string;
};

type IProps = {
  data: User[];
};

export function Users({ data }: IProps) {
  const [users, setUsers] = useState(data);

  const addRandomUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 1000) + 3,
      name: `User ${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: number) => {
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      return;
    }

    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <View>
      <Button title="Add Random User" onPress={addRandomUser} />

      {users.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No users available.
        </Text>
      )}

      {users.map((user) => (
        <View key={user.id} style={styles.listItem}>
          <Text style={styles.name}>{user.name}</Text>
          <TouchableOpacity onPress={() => handleDeleteUser(user.id)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 20,
  },
});
