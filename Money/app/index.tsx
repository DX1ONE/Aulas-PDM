import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// Importando o que você definiu no util.ts
import { titulo } from "../utils/util"; 
import textoDefault from "../utils/util"; // Importando o export default

export default function MoneyApp() {
  return (
    <View style={styles.container}>
      {/* Exibindo a variável importada */}
      <Text style={styles.texto}>Variável Titulo: {titulo}</Text>
      <Text style={styles.texto}>Default: {textoDefault}</Text>

      {/* Exemplo de Estilo Inline (que seu professor ensinou) */}
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 10 }}>
        Estilo Inline aqui
      </Text>

      {/* Componente de Botão (TouchableOpacity) com Estilo de Objeto */}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => alert('Botão clicado!')}
      >
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>
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
  botao: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  }
});