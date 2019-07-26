import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from  './src/components/cenaPrincipal';
import CenaJokeypo from './src/components/cenaJokeypo';

/*
const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }

});

*/

/* Navegação entre telas:
Uma vez que possuimos duas telas na aplicação, é fundamental implementar o componente navigator, o qual possibilita a troca de telas. Esee componente precisa
ser o primeiro a ser renderizado na aplicação, a partir dele haverá rotas. Para tal, importamos as duas telas (CenaPrincipal e CenaJokeypo) para o arquivo App.js.
Esse componente possui duas propriedades importantes :
*initialRoute, o qual se espera um objeto literal (JSON) que corresponda a um objeto de rota  - Cena Principal possui a id: A/ CenaJokeypo possui id: b. Define
a primeira renderização da navegação
* renderScene: se espera uma função de callback com os parâmetros route e navigator e com base nesses parametros definimos uma lógica para exibir as telas.

Como definido anteriormente, quando for chamado a propriedade da rota id: a, será renderizado a CenaPrincipal e id: b para CenaJokeypo. O objeto route poss





*/

 export default class app3 extends Component {

          render(){
              return (
                <Navigator
                  initialRoute={{ id: 'a'} }
                  renderScene={(route, navigator) => {
                    // definir a cena com base na rotas propriedade id

                    if (route.id === 'a') {
                      return(<CenaPrincipal navigator={navigator} />);
                    }

                    if (route.id === 'b')
                      return(<CenaJokeypo navigator={navigator} />);
                  }}
                />
              );
            }
          }



AppRegistry.registerComponent('final', () => app3);
