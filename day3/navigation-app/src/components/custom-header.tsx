import { Image, StyleSheet, Text, View } from "react-native";

export function CustomHeader() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={{ uri: "https://cdn-icons-png.freepik.com/512/3184/3184722.png" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#f4511e",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
