import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import axios from "axios";
export function ButtonOn() {

    var url = 'http://192.168.137.175/LED=ON'
    var urlToDB = 'https://multidisp.000webhostapp.com/Insertar.php'
    const [status, setStatus] = useState('1')
    
    const handleLedOn = async () => {
     
        const formData = new FormData()
        formData.append('Status', '1')
        const responseToDataBase = await axios.post(urlToDB, formData, { headers: { 'Content-Type': 'multipart/form-data' } })

        const response = await axios.post(url)

        console.log(response)
        console.log(responseToDataBase)
        if (response.status == 200) {
            alert("Led Encendido")

        }
    }


    return (
        <TouchableOpacity style={Styles.button} onPress={handleLedOn} >
            <Text style={Styles.text}>Encender LED</Text>
        </TouchableOpacity>
    )
}
const Styles = StyleSheet.create({
    button: {
        marginTop: 10,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50,
        backgroundColor: '#fc757e',
        padding: 10,
        height: 40,
        marginHorizontal: 100
    },
    text: {
        textAlign: "center"
    }
})