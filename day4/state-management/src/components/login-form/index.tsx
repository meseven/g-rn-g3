import { useForm, Controller } from "react-hook-form";
import { View, TextInput, StyleSheet, Button, Alert, Text } from "react-native";
import { LoginResolver, LoginSchemaType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/authStore";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export function Login() {
  const login = useAuthStore((state) => state.login);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "mehmet@test.com",
      password: "123456",
    },
    resolver: zodResolver(LoginResolver),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.email === "test@test.com") {
      setError("email", { message: "This email is not registered" });
      return;
    }

    login({
      email: data.email,
      accessToken: nanoid(),
    });
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={field.onChange}
            value={field.value}
            editable={!isSubmitting}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={field.onChange}
            value={field.value}
            editable={!isSubmitting}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <Button
        title={isSubmitting ? "Logging in..." : "Login"}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  input: {
    padding: 12,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
  },
  error: { color: "red" },
});
