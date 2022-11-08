import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Itens from './components/Itens';

export default function Cesta({topo, detalhes, itens}){
  return (
  <ScrollView>
    <Topo {...topo}/>
    <View style={style.cesta}>
    <Detalhes { ...detalhes}/>
    <Itens {...itens}/>
    </View>
  </ ScrollView>
  )
}

const style = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})