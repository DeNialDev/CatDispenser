import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import Global from "../url";
import axios from "axios";
import ListItemDispenser from "../componentes/ListItemDispenser"
var url = Global.urlApi + "/DataDispenser.php";
export var IsFull = true;
const CatDispenser = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(url);
    setData(response.data);

    console.log(data);
    if(data[0].Boul === "VACIO"){
      IsFull = false;
    }else{
      IsFull = true
    }
    console.log(String(IsFull))
  };
  useEffect(() => {
    
    getData();
  },[]);
  return (
    <View style={Styles.container}>
       <FlatList
        data={data}
        keyExtractor={(item) => item.Id}
        renderItem={({ item, index }) => <ListItemDispenser item={item}/>}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 10 }}></View>
        )}
        ListHeaderComponent={() => (
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
            Dispensador
          </Text>
        )}
      />
      <TouchableOpacity style={Styles.button} onPress={() => {
        getData()
      }}>
        <Text style={Styles.textButton}>Estado del recipiente</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 10,
    flex: 1,
    alignItems: "stretch",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#fea8f3",
    marginTop: 12,
    height: 40,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 10,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
  },
});
export default CatDispenser;
