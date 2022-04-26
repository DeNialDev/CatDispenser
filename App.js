import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
const handleLogin = async () => {
  const formData = new FormData()
  formData.append('LED', 'ON')




  const response = await axios.post(
    '192.168.137.190',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )
  console.log(response.data[0].Message)
  if (response.data[0].Message == 'Success') {
    alert("Bienvenido")
    navigation.navigate('HomeScreen')

  } else {
    alert("Ha ocurrido un error inesperado")
  }

}
export default function App() {


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogin}><Text style={styles.button}>Boton</Text></TouchableOpacity>

      <StatusBar style="auto" />
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
  button: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 50,
    backgroundColor: '#fc757e',
    padding: 10,
    height: 40,
    marginHorizontal: 100
  }
});
