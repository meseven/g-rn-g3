import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Paragraph } from "./paragraph";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(1);
  };
  // const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Paragraph title="Counter Component" />
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonGroup}>
        {/* <Button title="Azalt" onPress={decrement} /> */}
        <Button title="Arttır" onPress={increment} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "green",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
});

// state'e varsayılan bir değer atamak.
// state değerini veren tanım.
// state'i manipüle eden fonksiyon.
