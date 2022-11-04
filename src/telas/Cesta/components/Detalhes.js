import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";

import logo from '../../../../assets/logo.png';


export default function Detalhes() {
  return (
    <>
      <Texto style={style.nome}>Cesta de Verduras</Texto>
      <View style={style.fazenda}>
        <Image source={logo} style={style.imagemFazenda}/>
        <Texto style={style.nomeFazenda}>Jenny Jack Farma</Texto>
      </View>
      <Texto style={style.descricao}>
        Uma cesta com produtos selecionados
        cuidadosamente da fazenda para
        sua cozinha
      </Texto>
      <Texto style={style.preco}>R$ 40,00</Texto>
    </>
  )
}

const style = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height:32
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
});