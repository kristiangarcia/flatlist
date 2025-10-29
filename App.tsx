import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { calcularDivisores, toEnteroPositivo } from './utils/Funciones'
import CajaDivisor from './components/CajaDivisor'

export default function App() {
  const [texto, setTexto] = useState("")
  const [listaDivisores, setListaDivisores] = useState<Array<number>>([])

  function aceptarPulsado() {
    const {exito,valor} = toEnteroPositivo(texto)
    if(exito) {
      const lista = calcularDivisores(valor)
      setListaDivisores(lista)
    }
    else {
      Alert.alert("Error","Debe introducirse un número entero positivo")
    }
  }
  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.fila}>
        <TextInput
          style={styles.cuadroTexto}
          placeholder={"Escribe un número positivo"}
          placeholderTextColor={"#666"}
          value={texto}
          onChangeText={setTexto}
        />
        <Pressable
          style={ ({pressed}) => pressed? [styles.boton,{opacity:0.4}]:styles.boton }
          onPress={aceptarPulsado}>
          <Text style={styles.textoBoton}>Aceptar</Text>
        </Pressable>
      </View>
      <View style={styles.contenedorSecundario}>
        <FlatList
          data={listaDivisores}
          renderItem={CajaDivisor}
          keyExtractor={ numero => numero.toString() }
          numColumns={5}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: "#e6f0ff",
    padding: 30,
    rowGap: 20,
  },
  contenedorSecundario: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botonPulsado: {
    flex: 1,
    backgroundColor: "#4a90e2",
    opacity: 0.6,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cuadroTexto: {
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fila: {
    flexDirection: "row",
    columnGap: 20,
    marginTop: 20,
  },
  boton: {
    flex: 1,
    backgroundColor: "#4a90e2",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  textoBoton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})