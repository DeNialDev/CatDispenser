import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Global from "../url";
import axios from "axios";
var url = Global.urlApi + "/Login.php";
export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const login = async (username, password) => {
    axios
      .post(
        url,
        JSON.stringify({
          username: username,
          password: password,
        })
      )
      .then((response) => {
        let user = response.data;
        console.log(user);
        if(user == "ok"){
          navigation.navigate("Home");

        }else{
          alert("No existe cuenta");
        }
      });
  };
  return (
    <View style={Styles.container}>
      <Image
        source={require("../assets/home.jpg")}
        style={{ width: 120, height: 120, marginBottom: 50 }}
      />

      <View style={Styles.wrapper}>
        <TextInput
          style={Styles.input}
          placeholder="Nombre de Usuario"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text>
          Aun no tienes cuenta?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Text style={Styles.link}> Registrate</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            login(user, password);
          }}
        >
          <Text style={Styles.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fea8f3",
  },
  wrapper: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 10,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#fea8f3",
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50,
  },
  link: {
    color: "#fea8f3",
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
