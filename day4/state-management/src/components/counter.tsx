import { useState } from "react";
import { Button, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Arttır (Counter)" onPress={() => setCount(count + 1)} />
    </View>
  );
}
