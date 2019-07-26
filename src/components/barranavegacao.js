import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: 'white',
    padding: 10,
    height: 70
  },
  titulo: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  voltar: {
    marginTop: 25,
    width: 30,
    height: 30
  }
})

const btnVoltar = require('../../imgs/btn_voltar.png');

/*
Classe BarraDeNavegação disponibiliza o usuário a volta da cenaJokeypo para a tela Main.

utiliza-se a função pop para retirar do topo da pilha a CenaJokeypo
*/

export default class BarraNavegacao extends Component {
  render() {

    if(this.props.voltar) {
      return(
        <View style={ styles.barraTitulo}>
          <TouchableHighlight onPress= { () => { this.props.navigator.pop();
          }}>
            <Image source={btnVoltar} style={styles.voltar  }/>
          </TouchableHighlight>

        </View>
      );
    }



    return(
      <View></View>
    );
  }
}
