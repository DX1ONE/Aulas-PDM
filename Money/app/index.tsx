import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";
// Importando o que você definiu no util.ts
import { titulo } from "../utils/util"; 
import textoDefault from "../utils/util"; // Importando o export default

import { rotulo_input_meta, rotulo_btn_cadastro_meta, rotulo_lista_metas } from "./mensagens";

export default function MoneyApp() {
  return (
    <View style={styles.container}>
     {/* 1. TextInput com placeholder da constante */}
      <TextInput 
        style={styles.input}
        placeholder={rotulo_input_meta} 
      />

      {/* 2. Button com title da constante */}
      <Button 
        title={rotulo_btn_cadastro_meta} 
        onPress={() => alert('Meta Adicionada!')} 
      />

      {/* 3. Text com o valor da constante */}
      <Text style={styles.labelLista}>
        {rotulo_lista_metas}
      </Text>
    </View>
  );
}

// Estilos usando StyleSheet (mais organizado)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inline:{
    color: 'blue',
    fontSize: 20,
    marginTop: 10
  },
  botao: {
    backgroundColor: '#1800ee',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  labelLista: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  mainContainer:{
    padding: 30,
  }
});