import React, {useState} from "react";
import { View, Text,TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Global from "../url";
import axios from "axios";
var url = Global.urlApi + "/InsertarIp.php";

const SetIp = () => {
    const [ip, setIp] = useState("");
  
  const register = async (Ip) => {
    axios
      .post(
        url,
        JSON.stringify({
          Ip: ip
        })
      )
      .then((response) => {
        let cat = response.data;
        console.log(cat);
      });
  };
  return (
    <View style={Styles.container} >
      <TextInput
        placeholder="Ip del dispositivo"
        style={Styles.input}
        value={ip}
        onChangeText={(text) => setIp(text)}
      />
      <TouchableOpacity style={Styles.button} onPress={() => {register(ip)}}>
        <Text style={Styles.textButton}>Agregar dispositivo</Text>
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
export default SetIp;
