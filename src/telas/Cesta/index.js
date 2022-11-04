import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';

export default function Cesta({topo, detalhes}){
  return (
  <>
    <Topo {...topo}/>
    <View style={style.cesta}>
    <Detalhes { ...detalhes}/>
    </View>
  </>
  )
}

const style = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})