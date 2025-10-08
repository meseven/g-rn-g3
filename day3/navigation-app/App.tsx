import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { UserDetailScreen } from "./src/screens/user-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostDetailScreen } from "./src/screens/post-detail";
import { CustomHeader } from "./src/components/custom-header";
import { Button, Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "./src/screens/settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { ProfileSettingsScreen } from "./src/screens/profile-settings";

const HomeStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: {
      // backgroundColor: "#f4511e",
    },
    // headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerTitle: () => <CustomHeader />,
        headerRight: () => (
          <Button title="Add" onPress={() => alert("This is a button!")} />
        ),
      },
    },
    UserDetail: {
      screen: UserDetailScreen,
      // @ts-ignore
      options: ({ route }) => ({ title: route.params?.name }),
    },
    PostDetail: {
      screen: PostDetailScreen,
      // @ts-ignore
      options: ({ route }) => ({ title: route.params?.title }),
    },
  },
});

const SettingsStack = createNativeStackNavigator({
  screens: {
    Settings: SettingsScreen,
    ProfileSettings: ProfileSettingsScreen,
  },
});

const RootStack = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarBackground: () =>
      Platform.OS === "ios" ? (
        <BlurView
          tint="light"
          intensity={100}
          style={StyleSheet.absoluteFill}
        />
      ) : null,
  },
  screens: {
    Home: {
      screen: HomeStack,
      options: {
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
      },
    },
    Settings: {
      screen: SettingsStack,
      options: {
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings" size={24} color={color} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
