import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { UserDetailScreen } from "./src/screens/user-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostDetailScreen } from "./src/screens/post-detail";

const RootStack = createNativeStackNavigator({
  // screenOptions: {
  //   headerStyle: { backgroundColor: "tomato" },
  // },
  screens: {
    Home: HomeScreen,
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
