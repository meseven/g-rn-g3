import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // useEffect(() => {
  //   console.log("count state değişti!");
  // }, [count]);

  // useEffect(() => {
  //   console.log("amount state değişti!");
  // }, [amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + amount)} />

      <View style={{ flexDirection: "row" }}>
        <Button
          title="+1"
          onPress={() => setAmount(1)}
          color={amount === 1 ? "blue" : "black"}
        />
        <Button
          title="+5"
          onPress={() => setAmount(5)}
          color={amount === 5 ? "blue" : "black"}
        />
        <Button
          title="+10"
          onPress={() => setAmount(10)}
          color={amount === 10 ? "blue" : "black"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
