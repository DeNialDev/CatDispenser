import React, { useEffect, useState } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import axios from "axios";
import ListItem from "./ListItem";
import Global from "../url";
import CatDispenser from "./CatDispenser";
import { IsFull } from "./CatDispenser";
var url = Global.urlApi + "/Data.php";
const DataDisplay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setData(response.data);

      console.log(data);
    };
    getData();
  }, []);
  return (
    <View style={Styles.container}>
    {IsFull ? <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ListItem item={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 10 }}></View>
        )}
        ListHeaderComponent={() => (
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
            Lista de gatos
          </Text>
        )}
      /> : <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>Dispensador vacio</Text>}
      
      
    </View>
    
  );
};
const Styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 10,
    flex: 1,
    alignItems: "stretch",
  },
});
export default DataDisplay;
