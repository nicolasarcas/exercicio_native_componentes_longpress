import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';


const ContatoInput = (props) => {
    const[numero,setNumero] = useState('');
    const[nome,setNome] = useState('');

    const capturarNumero = (numero)=>{
        setNumero(numero);
    }

    const capturarNome = (nome)=>{
        setNome(nome);
    }

  return (
        <View >
            <Text>Novo contato</Text>
            <TextInput style={styles.estiloTextInput}
                placeholder='Nome'
                value={nome}
                onChangeText={capturarNome}
            />
            <TextInput style={styles.estiloTextInput}
                placeholder='Número'
                value = {numero}
                onChangeText={capturarNumero}
            />
            <Button
                title='Adicionar'
                onPress={()=>props.onAdicionarContato(nome,numero)}
            />
        </View>
        )
}

const styles = StyleSheet.create({
    estiloTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 4,
        padding: 4
      },
      lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
});

export default ContatoInput;