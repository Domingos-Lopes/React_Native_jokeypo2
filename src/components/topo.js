import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  imagem: {
    marginTop: 20,
    width: 250,
    height: 250
  }
})


class Topo extends Component {
  render(){
    return(
    <View style={{alignItems: 'center'}}>
        <Image source={require('../../imgs/4all.jpg')} style={styles.imagem}/>

    </View>
  );
  }
}

export default Topo;
