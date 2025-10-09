import { Button, Text, View } from "react-native";
import { useAuthStore } from "../store/authStore";

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <View>
      <Text>Profile</Text>
      {user && (
        <>
          <Text>Email: {user.email}</Text>
          <Text>Access Token: {user.accessToken}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      )}
    </View>
  );
}
