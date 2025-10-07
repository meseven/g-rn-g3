import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Users } from "./src/components/users";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Users />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
