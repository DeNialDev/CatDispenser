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

const CatDispenser = () => {
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
export default CatDispenser;
