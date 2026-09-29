import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

export default function App() {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [editando, setEditando] = useState(null);

  function adicionarProduto() {
    if (produto.trim() === "") return;

    setProdutos([...produtos, produto.trim()]);
    setProduto("");
  }

  function editarProduto(index) {
    setProduto(produtos[index]);
    setEditando(index);
  }

  function salvarEdicao() {
    if (produto.trim() === "") return;

    const novaLista = [...produtos];
    novaLista[editando] = produto.trim();

    setProdutos(novaLista);
    setProduto("");
    setEditando(null);
  }

  function removerProduto(index) {
    setProdutos(produtos.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>
      <Text style={styles.subtitulo}>Organize seus produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um produto..."
        value={produto}
        onChangeText={setProduto}
      />

      <Pressable
        style={styles.botao}
        onPress={editando === null ? adicionarProduto : salvarEdicao}
      >
        <Text style={styles.textoBotao}>
          {editando === null ? "ADICIONAR" : "SALVAR"}
        </Text>
      </Pressable>

      {editando !== null && (
        <Pressable
          onPress={() => {
            setProduto("");
            setEditando(null);
          }}
        >
          <Text style={styles.cancelar}>Cancelar edição</Text>
        </Pressable>
      )}

      <View style={styles.cabecalhoLista}>
        <Text style={styles.tituloLista}>Produtos</Text>
        <Text style={styles.contador}>{produtos.length}</Text>
      </View>

      {produtos.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text style={styles.nome}>{item}</Text>

          <View style={styles.acoes}>
            <Pressable onPress={() => editarProduto(index)}>
              <Text style={styles.editar}>✏️</Text>
            </Pressable>

            <Pressable onPress={() => removerProduto(index)}>
              <Text style={styles.excluir}>🗑️</Text>
            </Pressable>
          </View>
        </View>
      ))}

      {produtos.length === 0 && (
        <Text style={styles.vazio}>Nenhum produto adicionado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f7f4",
    padding: 25,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#246b45",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    color: "#777",
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d0d8d3",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#2e7d52",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancelar: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
  },

  cabecalhoLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 12,
  },

  tituloLista: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  contador: {
    backgroundColor: "#dcefe3",
    color: "#246b45",
    fontWeight: "bold",
    padding: 8,
    borderRadius: 20,
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    fontSize: 17,
    color: "#333",
    flex: 1,
  },

  acoes: {
    flexDirection: "row",
    gap: 12,
  },

  editar: {
    fontSize: 18,
  },

  excluir: {
    fontSize: 18,
  },

  vazio: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },
});
