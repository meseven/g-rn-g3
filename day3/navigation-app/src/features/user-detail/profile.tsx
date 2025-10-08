import { useQuery } from "@tanstack/react-query";
import { Text } from "react-native";
import { GET_USER_BY_ID } from "../../api/endpoints";

type IProps = {
  id: number;
};

export function Profile({ id }: IProps) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => GET_USER_BY_ID(id),
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error occurred</Text>;

  return <Text>{JSON.stringify(data, null, 2)}</Text>;
}
