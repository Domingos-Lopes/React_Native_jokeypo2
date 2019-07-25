import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  StatusBar
} from 'react-native';


import Topo from './src/components/topo';
import Icone from  './src/components/icone';

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



 export default class app3 extends Component {

   constructor(props){
         super(props);

         this.state = {  escolhaUsuario : '',
                         escolhaComputador : '',
                         resultado : ''
                       }
       }
       jokenpo(escolhaUsuario){

            //gera número aleatório ( 0, 1, 2)
            var numAleatorio = Math.floor(Math.random() * 3);

            var escolhaComputador = '';

            switch(numAleatorio){
              case 0: escolhaComputador = 'pedra'; break;
              case 1: escolhaComputador = 'papel'; break;
              case 2: escolhaComputador = 'tesoura'; break;
            }

            var resultado = '';

            if(escolhaComputador == 'pedra'){
              if(escolhaUsuario == 'pedra'){
                resultado = 'Empate';
              }

              if(escolhaUsuario == 'papel'){
                resultado = 'Você Ganhou! Parabéns';
              }

              if(escolhaUsuario == 'tesoura'){
                resultado = 'Perdeu! Mais sorte na próxima';
              }
            }

            if(escolhaComputador == 'papel'){
              if(escolhaUsuario == 'papel'){
                resultado = 'Empate';
              }

              if(escolhaUsuario == 'tesoura'){
                resultado = 'Você Ganhou! Parabéns';
              }

              if(escolhaUsuario == 'pedra'){
                resultado = 'Perdeu! Mais sorte na próxima';
              }
            }

            if(escolhaComputador == 'tesoura'){
              if(escolhaUsuario == 'tesoura'){
                resultado = 'Empate';
              }

              if(escolhaUsuario == 'pedra'){
                resultado = 'Você Ganhou! Parabéns';
              }

              if(escolhaUsuario == 'papel'){
                resultado = 'Perdeu! Mais sorte na próxima';
              }
            }

            this.setState({ escolhaUsuario : escolhaUsuario,
                            escolhaComputador : escolhaComputador,
                            resultado : resultado
                          });


          }
          render(){
              return (
                <View>

                  <View>
                    <StatusBar
                      hidden = {true}
                      />
                  </View>

                  <Topo ></Topo>

                  <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                      <Button title="Pedra" onPress={ () => { this.jokenpo('pedra')}} />
                    </View>
                    <View style={styles.btnEscolha}>
                      <Button title="Papel" onPress={ () => { this.jokenpo('papel')}} />
                    </View>
                    <View style={styles.btnEscolha}>
                      <Button title="Tesoura" onPress={ () => { this.jokenpo('tesoura')}} />
                    </View>
                  </View>


                  <View style={styles.painelAcoes}>
                      <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                      <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>

                      <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>


                  </View>



                </View>
              );
            }
          }


AppRegistry.registerComponent('final', () => app3);
