import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import axios from "axios";
export function ButtonOff() {
    var url = 'http://192.168.137.175/LED=OFF'
    const handleLedOff = async () => {
        const formData = new FormData()
        formData.append('LED', 'OFF')
        const response = await axios.post(url, formData)
        console.log(response)
        if (response.status == 200) {
            alert("Led Encendido")

        }
    }
    return (
        <TouchableOpacity style={Styles.button} onPress={handleLedOff} >
            <Text style={Styles.text}>Apagar LED</Text>
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