import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContatoInput from './componentes/ContatoInput';
import ContatoItem from './componentes/ContatoItem';

export default function App() {
  const[contatos,setContatos] = useState([]);
  const[contadorContatos,setContadorContatos] = useState(0);

  const adicionarContato = (nome, numero) =>{
    let contato = {nome:  nome, numero: numero};    
    setContatos((contatos)=>{
      setContadorContatos(contadorContatos+1);
      return[{key: contadorContatos.toString(),value:contato},...contatos]
    });
  }
  const removerLembrete = (keyASerRemovida) =>{
    setContatos(contatos => {
      return contatos.filter((contato) => { return contato.key !== keyASerRemovida })
    })
  }
  return (
    <View style={styles.telaPrincipalView}>

      <ContatoInput onAdicionarContato={adicionarContato}/>

      <Text>Contatos</Text>
      <View style={styles.lembreteView}>
        <FlatList
          data={contatos}
          renderItem={
            contato =>(
              <ContatoItem
                chave = {contato.item.key}
                nome = {contato.item.value.nome}
                numero = {contato.item.value.numero}
                onDelete={removerLembrete}
              />
            )       
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  estiloTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 4
  },
  telaPrincipalView: {
    padding: 50
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#EEE',
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
