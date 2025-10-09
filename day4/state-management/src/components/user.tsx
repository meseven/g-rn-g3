import { Button, Text, View } from "react-native";
import { useAuthStore } from "../store/authStore";

export function User() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  if (!user) {
    return (
      <View style={{ marginBottom: 30 }}>
        <Text>No user logged in</Text>
        <Button
          title="Login"
          onPress={() =>
            login({
              username: "mseven",
              accessToken: "fake_token_12345",
            })
          }
        />
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <Text>{user.username}</Text>
      <Text>{user.accessToken}</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
