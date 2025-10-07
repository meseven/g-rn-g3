import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { UserListItem } from "./user-list-item";
import { User } from "../types/user";
import axios, { isAxiosError } from "axios";

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [firstUserPosts, setFirstUserPosts] = useState([]);
  const [firstPostComments, setFirstPostComments] = useState([]);

  useEffect(() => {
    // axios(`${BASE_ENDPOINT}/users`)
    //   .then((res) => {
    //     setUsers(res.data);

    //     axios(`${BASE_ENDPOINT}/posts?userId=${res.data[0].id}`).then((res) => {
    //       setFirstUserPosts(res.data);

    //       axios(`${BASE_ENDPOINT}/comments?id=${res.data[0].id}`).then(
    //         (res) => {
    //           setFirstPostComments(res.data);
    //         }
    //       );
    //     });
    //   })
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    try {
      const { data: users } = await axios(`${BASE_ENDPOINT}/users`);
      setUsers(users);

      const { data: posts } = await axios(
        `${BASE_ENDPOINT}/posts?userId=${users[0].id}`
      );
      const { data: comments } = await axios(
        `${BASE_ENDPOINT}/comments?id=${posts[0].id}`
      );

      setFirstUserPosts(posts);
      setFirstPostComments(comments);
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.userlist}>
        <FlatList
          ListHeaderComponent={() => (loading ? <ActivityIndicator /> : null)}
          data={users}
          renderItem={({ item }) => <UserListItem user={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <ScrollView style={styles.bottomArea}>
        <Text>First users posts:</Text>
        <Text>{JSON.stringify(firstUserPosts, null, 2)}</Text>

        <Text style={{ marginTop: 20 }}>First post comments</Text>
        <Text>{JSON.stringify(firstPostComments, null, 2)}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userlist: {
    flex: 1,
  },
  bottomArea: {
    flex: 1,
    padding: 20,
  },
});
