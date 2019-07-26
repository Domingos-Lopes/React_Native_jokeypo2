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
        <Topo></Topo>
          <View style={{alignItems: 'center'}}>
          <Text style={styles.txt}t>Jokeypo 4all! </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 40}}>
          <TouchableHighlight onPress={() => { this.props.navigator.push({id: 'b'});
        }}
          >
            <Image source={conflict} style={{width: 200, height: 200 }}/>
          </TouchableHighlight>
            <Text style={styles.txtBriga}>FIGHT!</Text>
        </View>
      </View>
    );
  }
}
