import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Camera from "./src/components/camera";

export default function App() {
  return (
    <View style={styles.container}>
      <Camera />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
