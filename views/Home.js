import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from "axios";

import { ButtonOn } from "../componentes/ButtonOn";
import { ButtonOff } from "../componentes/ButtonOff";
export default function Home({ navigation }) {
    
    return (
        <View>
            <Text>Led</Text>

            <ButtonOn/>
            <ButtonOff/>
        </View>
    )
}

