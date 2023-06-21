import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons'; 

export function NavBar() {
  return(
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="white" style={styles.image} />
      <Text style={styles.text}>Perfil</Text>
    </View>
  )
}
