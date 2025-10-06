import { StyleSheet, Text, View } from "react-native";

type IProps = {
  title: string;
  description?: string;
};

export function Paragraph({ title, description }: IProps) {
  return (
    <View style={{ borderWidth: 2, borderColor: "red" }}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
