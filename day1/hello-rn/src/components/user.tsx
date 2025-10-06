import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

type IProps = {
  values: {
    name: string;
    age: number;
  };
};

export function User({ values }: IProps) {
  const [user, setUser] = useState(values);

  const handleClick = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <View>
      <Text>{JSON.stringify(user, null, 2)}</Text>

      <Button title="Update Age" onPress={handleClick} />
    </View>
  );
}
