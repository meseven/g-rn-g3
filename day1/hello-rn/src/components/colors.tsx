import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

type IProps = {
  initialColor?: string;
}

export function Colors({ initialColor }: IProps) {
  const [activeColor, setActiveColor] = useState(initialColor || colors[0]);

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setActiveColor(colors[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.colors, { backgroundColor: activeColor }]} />
      <Text>{activeColor}</Text>
      <Button title="Change Color" onPress={handleChangeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  colors: {
    width: 100,
    height: 100,
  },
});
