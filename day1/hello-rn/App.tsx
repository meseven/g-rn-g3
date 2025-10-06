import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import { Counter } from "./src/components/counter";
// import { Paragraph } from "./src/components/paragraph";
// import { User } from "./src/components/user";
// import { Colors } from "./src/components/colors";
// import { Users } from "./src/components/users";
import { Users } from "./src/components/users";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Colors initialColor="yellow" /> */}
      {/* <Counter /> */}
      {/* <User
        values={{
          name: "Jane Doe",
          age: 25,
        }}
      /> */}

      <Users
        data={[
          {
            id: 1,
            name: "Alice",
          },
          {
            id: 2,
            name: "Bob",
          },
        ]}
      />
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.box1}>
  //       <View style={styles.box6}>
  //         <Text>Box 6</Text>
  //       </View>
  //       <View style={styles.box7}>
  //         {/* <Paragraph
  //           title="Merhaba Mehmet"
  //           description="React Native ile mobil uygulama geliştirme"
  //         /> */}

  //         {/* <User
  //           values={{
  //             name: "Jane Doe",
  //             age: 25,
  //           }}
  //         /> */}

  //         <Users
  //           data={[
  //             {
  //               id: 1,
  //               name: "Alice",
  //             },
  //             {
  //               id: 2,
  //               name: "Bob",
  //             },
  //             {
  //               id: 3,
  //               name: "Charlie",
  //             },
  //           ]}
  //         />
  //       </View>
  //     </View>
  //     <View style={styles.box2}>
  //       <View style={styles.box3}>
  //         <Text>Box 3</Text>
  //       </View>
  //       <View style={styles.box4}>
  //         <Text>Box 4</Text>
  //       </View>
  //       <View style={styles.box5}>
  //         <Text>Box 5</Text>
  //       </View>
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  box6: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box7: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "row",
  },
  box3: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
  },
  box4: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  box5: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
