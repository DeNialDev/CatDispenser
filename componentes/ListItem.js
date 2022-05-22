import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Button } from "react-native";
import axios from "axios";
var url = "http://192.168.137.173/LED=ON"
const ListItem = ({ item }) => {
  const { catName, catWeight, id } = item;
  const requestToDispenser = (catName) =>{
      alert("Dispensador abierto para: " + catName);
      axios.get(url)
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{catName} - {catWeight} kg</Text>
        <Button title="Alimentar" color="#fea8f3" onPress={() => {
            requestToDispenser(catName)

        }
        
        }/>
      </View>
    </SafeAreaView>
  );
};
  
  
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#f1f2f9",
    borderColor: "#fea8f3",
    
    padding: 10,
  },
});
export default ListItem;
