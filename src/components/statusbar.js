import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';


class StatusBar extends Component {
  render(){
    return(
      <View>
        <StatusBar
          hidden = {true}
          />
      </View>
  );
  }
}

export default StatusBar;
