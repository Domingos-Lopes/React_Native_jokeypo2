import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

class Topo extends Component {
  render(){
    return(
    <View style={{alignItems: 'center'}}>
        <Image source={require('../../imgs/4all.jpg')} style={{width: 300, height: 300}}/>
    </View>
  );
  }
}

export default Topo;
