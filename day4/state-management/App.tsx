import { StyleSheet } from "react-native";
import { Profile } from "./src/components/profile";
import { useAuthStore } from "./src/store/authStore";
import { Login } from "./src/components/login-form";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {user ? <Profile /> : <Login />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
