import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Counter } from "./src/components/counter";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Counter />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
