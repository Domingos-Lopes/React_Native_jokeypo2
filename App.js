import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from  './src/components/cenaPrincipal';
import CenaJokeypo from './src/components/cenaJokeypo';

/* Navegação entre telas:
Uma vez que possuimos duas telas na aplicação, é fundamental implementar o componente navigator, o qual possibilita a troca de telas. Esee componente precisa
ser o primeiro a ser renderizado na aplicação, a partir dele haverá rotas. Para tal, importamos as duas telas (CenaPrincipal e CenaJokeypo) para o arquivo App.js.
Esse componente possui duas propriedades importantes :
*initialRoute, o qual se espera um objeto literal (JSON) que corresponda a um objeto de rota  - Cena Principal possui a id: A/ CenaJokeypo possui id: b. Define
a primeira renderização da navegação
* renderScene: se espera uma função de callback com os parâmetros route e navigator e com base nesses parametros definimos uma lógica para exibir as telas.

Como definido anteriormente, quando for chamado a propriedade da rota id: a, será renderizado a CenaPrincipal e id: b para CenaJokeypo. Além disso, o componente
Navigator pussui duas funçõs:
* push: insere um valor no topo da pilha
* pop: remove um valor do topo da pilha
A ideia por tréa do navigator consiste em uma pilha de cenas, na qual empilhamos e removemos conforme as decisões do usuário
*/

 export default class app3 extends Component {
          render(){
              return (
                <Navigator
                  initialRoute={{ id: 'a'} }
                  renderScene={(route, navigator) => {
                    // definir a cena com base na rotas propriedade id
                    // é retornado junto com a cena a propriedade navigator, para que possa ser utilizado nos demais componentes

                    if (route.id === 'a') {
                      return(<CenaPrincipal navigator={navigator} />);
                    }

                    // retornado como props o navigator que vai para o componente cenaJokeypo e depois vai para a barardeNavegação
                    if (route.id === 'b')
                      return(<CenaJokeypo navigator={navigator} />);
                  }}
                />
              );
            }
          }

AppRegistry.registerComponent('final', () => app3);
