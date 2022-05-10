import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";

import Global from "../url";

var url = Global.urlApi + "/Insertar.php";

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const register = async (username, password) => {
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
        navigation.navigate("LoginScreen");
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

        <View>
          <Text>
            Ya tienes cuenta?
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text style={Styles.link}> Iniciar sesión</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            register(user, password);
          }}
        >
          <Text style={Styles.textButton}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
export default RegisterScreen;
