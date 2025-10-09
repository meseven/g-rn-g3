import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

type User = {
  email: string;
  accessToken: string;
};

type Store = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const SecureStorageAdapter = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() =>
        Platform.OS === "web" ? AsyncStorage : SecureStorageAdapter
      ),
    }
  )
);
