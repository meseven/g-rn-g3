import { useQuery } from "@tanstack/react-query";
import { GET_USERS } from "../../api/endpoints";
import { FlatList, Text } from "react-native";
import { UserItem } from "./user-item";

export function Users() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: GET_USERS,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error occured</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
    />
  );
}
