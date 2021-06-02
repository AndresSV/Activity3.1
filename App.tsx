import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

const Friends = (props: any) => {
  const [item, setItem] = useState(props);
  return (
    <TouchableOpacity style={styles.item} onPress={()=> {

    }}>
      <View style={styles.item}>
        <Text>{'\u2022'} Name: {props.name}, Hobby: {props.hobby} </Text>
        <FlatList 
          data={props}
          renderItem={({item}) => <Friends name={item.name} hobby={item.hobby} />}
        />
      </View>
    </TouchableOpacity>
  );
}

const FriendsInfo = (props: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
  console.log("FriendsInfo");
}

function App() {
  const [DATA, setData] = useState();
  return (
    <View style={styles.container}>
       <FlatList
        data={DATA}
        renderItem={({item}) => <Friends name={item.name} hobby={item.hobby} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Load" onPress={() => {
          const raw =  fetch('https://raw.githubusercontent.com/AndresSV/Activity3.1/main/friends.json').then(response => response.json());
          raw.then( (data) => setData(data) );
        }
      }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 22,
  },
});

export default App;