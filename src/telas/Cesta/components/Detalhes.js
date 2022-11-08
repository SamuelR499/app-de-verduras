import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../components/Texto";




export default function Detalhes({nome, logoFazendo, nomeFazenda, descricao, preco, botao}) {
  return (
    <>
      <Texto style={style.nome}>{ nome }</Texto>
      <View style={style.fazenda}>
        <Image source={logoFazendo} style={style.imagemFazenda}/>
        <Texto style={style.nomeFazenda}>{ nomeFazenda }</Texto>
      </View>
      <Texto style={style.descricao}>
      { descricao }
      </Texto>
      <Texto style={style.preco}>{ preco }</Texto>
      <TouchableOpacity style={style.botao} onPress={() => {}}>
        <Texto style={style.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
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
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6

  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
});