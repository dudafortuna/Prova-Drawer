import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
            <Image source={require('./mylogo.png')} style={styles.imagem}  />

      <Text style={styles.titulo}>NETX</Text>
      <Link   style= {{fontWeight: "bold" }} href="/Home">Ir para Home</Link>

      <label style= {{fontWeight: "bold" }} htmlFor="">Nome</label>
      <input type="text" placeholder="Digite seu nome" />
      <label  style= {{fontWeight: "bold" }} htmlFor="">E-mail</label>
      <input type="E-mail" placeholder="Digite seu E-mail" />
      <label style= {{fontWeight: "bold" }} htmlFor="">Data</label>
      <input type="Date" placeholder="Digite sua data" />
      <label style= {{fontWeight: "bold" }} htmlFor="">CPF</label>
      <input type="CPF" placeholder="Digite seu CPF" />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagem: {
    borderRadius: 20,
    height: 229,
    width: 300,

  }

});
 