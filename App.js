import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Halit");
  const [age, setAge] = useState(40);

  // const nameChanger = () => {
  //   setName("Ryu");
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.para}>Deneme, hello world</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Merhaba, my name is {name} and I am {age} yrs old
        </Text>
      </View>
      <View>
        <TextInput
          multiline
          placeholder=" Enter name"
          style={styles.input}
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          placeholder=" Enter age"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(val) => setAge(val)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "purple",
    padding: 20,
  },
  para: {
    color: "white",
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "lightblue",
    padding: 30,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 5,
    width: 100,
  },
});
