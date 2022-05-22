import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

import Global from "../url";

var url = Global.urlApi + "/InsertarGato.php";



const CatRegister = () => {
  const [catName, setCatname] = useState("");
  const [catWeight, setWeight] = useState("");
  
  const register = async (catName, catWeight) => {
    axios
      .post(
        url,
        JSON.stringify({
          catName: catName,
          catWeight: catWeight,
        })
      )
      .then((response) => {
        let cat = response.data;
        console.log(cat);
      });
  };
  return (
    <View style={Styles.container}>
    <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>Registro de gatos</Text>
      <TextInput
        placeholder="Nombre del gato"
        style={Styles.input}
        value={catName}
        onChangeText={(text) => setCatname(text)}
      />
      <TextInput
        placeholder="Peso del gato"
        style={Styles.input}
        value={catWeight}
        onChangeText={(text) => setWeight(text)}
      />
      <TouchableOpacity style={Styles.button} onPress={() => {register(catName, catWeight)}}>
        <Text style={Styles.textButton}>Registrar gato</Text>
      </TouchableOpacity>
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
  input: {
    width: "100%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#fea8f3",
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#fea8f3",
    marginTop: 12,
    height: 50,
    width: 100,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 10,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
  },
});
export default CatRegister;
