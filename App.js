import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const SubmitHandler = () => {
    setList((new_ele) => [...new_ele, newTask]);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput onChangeText={(e) => setNewTask(e)} style={styles.inputField} placeholder='Enter your task' />
        <TouchableOpacity
          style={styles.btn}
          onPress={SubmitHandler}
        >
          <Text style={{ color: "#ffffff", textAlign: "center", justifyContent: "center" }}>Submit</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <View style={{ flexDirection: 'row', marginTop: '5%', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>
      <ScrollView>
        {
          list.map((ele, ind) =>
            <View key={ind} style={styles.ListViewTab}>
              <Text style={styles.taskBody}>{ele}</Text>
            </View>
          )
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "15%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    width: "50%",
    height: "100%",
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#d6d3d1"
  },
  taskBody: {
    fontSize: 25,
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  ListViewTab: {
    backgroundColor: "#A020F0",
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 5,
    height: 40,
    width: "90%",
    marginLeft: 20
  },
  btn: {
    backgroundColor: "#A020F0",
    width: 70,
    height: 20,
    marginLeft: 10,
    borderRadius: 3
  }
});
