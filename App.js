import React from 'react';
import { View } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';
import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Topo />
      <Conteudo />
    </View>
  );
}
