import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Friends = (props: any) => {
  return (
    <View style={styles.item}>
      <Text>{'\u2022'} Name: {props.name}, Hobby: {props.hobby} </Text>
    </View>
  );
}

function App() {
  const [DATA, setData] = useState();
  return (
    <View style={styles.container}>
      <ScrollView>
       <FlatList
        data={DATA}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => {
            alert( "Name: \t" +item.name+"\n"
                  +"Hobby: \t"+item.hobby+"\n"
                  +"Age: \t"  +item.age+"\n"
                  +"Address: \t"+item.address+"\n"
                  +"Phone: \t"+item.phone+"\n"
            );
            console.log(item.name);
            console.log(item.hobby);
            console.log(item.age);
            console.log(item.address);
            console.log(item.phone);
          }}>
            <Friends name={item.name} hobby={item.hobby} />
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()
        }
      />
      
      <Button title="Load" onPress={() => {
          const raw =  fetch('https://raw.githubusercontent.com/AndresSV/Activity3.1/main/friends.json').then(response => response.json());
          raw.then( (data) => setData(data) );
        }
      }/>
      <StatusBar style="auto" />
      </ScrollView>
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
  },
});

export default App;