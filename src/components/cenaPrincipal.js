import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './barranavegacao';
import Topo from './topo'

const conflict = require('../../imgs/conflict.png');


const styles = StyleSheet.create({
  imagem: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtBriga: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold'
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green'
  }
});

export default class CenaPrincipal extends Component {
  render() {
    return(
      <View>
        <BarraNavegacao/>
        <View style={{marginTop: 70}}>
            <Topo></Topo>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt}t>Jokeypo 4all! </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 40}}>
          <TouchableHighlight onPress={() => { this.props.navigator.push({id: 'b'}); }}>
            <Image source={conflict} style={{width: 200, height: 200 }}/>
          </TouchableHighlight>
            <Text style={styles.txtBriga}>FIGHT!</Text>
        </View>

      </View>
    );
  }
}

/*
A função onPress é o meio pelo qual o usuário define a intençnao de ir a próxima cena. No momento em que o componente dentro
do TouchableHighlight for acionado executará uma função de callback(push) a qual coloca a CenaJokeypo acima da tela Main por meio do
parametro de instrução de rota id b. Como o comoponente navigator não faz parte da Cena Principal passamos como propos no App.js.
*/
