import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CajaDivisorProps = {
    item:number
}

export default function CajaDivisor({item}:CajaDivisorProps) {
    return (
    <View style={styles.contenedor}>
        <Text style={styles.text}>{item}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        width: 70,
        height: 50,
        backgroundColor: "#d32f2f",
        borderRadius: 15,
        margin: 3
    },
    text:{
        color :"#fff",
        fontSize: 18,
        margin: "auto"
    }
})