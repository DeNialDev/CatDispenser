import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Button } from "react-native";
import axios from "axios";
import Global from "../url";
var url = "http://";
var ipServer = Global.urlApi + "/DataIp.php";
const ListItem = ({ item }) => {
  const { catName, catWeight, id } = item;
  const [ip, setIp] = useState([]);

  const requestToIp = () => {
    axios.get(ipServer).then((res) => {
      url = "http://";
      
      setIp(res.data);
     
    
      url += ip[0].IpDev + "/LED="
      
    });
  };
  const requestToDispenser = (catName, catWeight) => {
    
    url += String(catWeight);
    
    console.log(url);
    alert("Dispensador abierto para: " + catName);
    axios.get(url);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          {catName} - {catWeight} kg
        </Text>
        <Button
          title="Alimentar"
          color="#fea8f3"
          onPress={() => {
            requestToIp();
            requestToDispenser(catName, catWeight);
            
          }}
        />
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
