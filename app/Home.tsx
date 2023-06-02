import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./mylogo.png')} style={styles.imagem}  />
      <Text style={styles.titulo}>NETX</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis placeat rerum nisi, officiis ipsam?</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis placeat rerum nisi, officiis ipsam?</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis placeat rerum nisi, officiis ipsam?</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis placeat rerum nisi, officiis ipsam?</Text>

      <Link style={{fontWeight: "bold"}} href="/Index">Ir para Index</Link>
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
