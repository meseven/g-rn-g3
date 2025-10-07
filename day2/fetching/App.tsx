import { useSyncQueriesExternal } from "react-query-external-sync";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import * as Device from "expo-device";
import {
  Platform,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Users } from "./src/components/users";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Posts } from "./src/components/posts";
import { Photos } from "./src/components/photos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import storage from "./storage/mmkv";

const queryClient = new QueryClient();

export default function App() {
  const [activeTab, setActiveTab] = useState<"posts" | "photos">("posts");

  console.log("merhaba");

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.tabRoot}>
            <TouchableOpacity
              onPress={() => setActiveTab("posts")}
              style={[
                styles.tabItem,
                activeTab === "posts" && styles.tabItemActive,
              ]}
            >
              <Text style={styles.tabLabel}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab("photos")}
              style={[
                styles.tabItem,
                activeTab === "photos" && styles.tabItemActive,
              ]}
            >
              <Text style={styles.tabLabel}>Photos</Text>
            </TouchableOpacity>
          </View>

          {activeTab === "posts" ? <Posts /> : <Photos />}
        </SafeAreaView>
      </SafeAreaProvider>

      <QueryDevtools />
    </QueryClientProvider>
  );
}

const QueryDevtools = () => {
  useSyncQueriesExternal({
    queryClient,
    socketURL: "http://localhost:42831", // Default port for React Native DevTools
    deviceName: Platform?.OS || "web", // Platform detection
    platform: Platform?.OS || "web", // Use appropriate platform identifier
    deviceId: Platform?.OS || "web", // Use a PERSISTENT identifier (see note below)
    isDevice: Device.isDevice, // Automatically detects real devices vs emulators
    extraDeviceInfo: {
      // Optional additional info about your device
      appVersion: "1.0.0",
      // Add any relevant platform info
    },
    enableLogs: false,
    envVariables: {
      NODE_ENV: process.env.NODE_ENV,
      // Add any private environment variables you want to monitor
      // Public environment variables are automatically loaded
    },
    // Storage monitoring with CRUD operations
    mmkvStorage: storage, // MMKV storage for ['#storage', 'mmkv', 'key'] queries + monitoring
    asyncStorage: AsyncStorage, // AsyncStorage for ['#storage', 'async', 'key'] queries + monitoring
    secureStorage: SecureStore, // SecureStore for ['#storage', 'secure', 'key'] queries + monitoring
    secureStorageKeys: [
      "userToken",
      "refreshToken",
      "biometricKey",
      "deviceId",
    ], // SecureStore keys to monitor
  });

  return null;
};

const styles = StyleSheet.create({
  tabRoot: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabItem: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  tabLabel: {
    fontWeight: "600",
  },
});
