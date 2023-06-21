import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';

// import { sendForm } from '../Form/Form';

import { 
  useFonts,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

export function AreaAlert(){
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return(
    <View style={styles.areaAdds}>
        <TouchableOpacity 
          style={styles.button}
          // onPress={sendForm}
        >
          <Text style={styles.textButton}>Gerar PDF</Text>
        </TouchableOpacity> 

        <View style={styles.alertArea}>
          <Feather name="alert-octagon" size={32} color="#3a2cd2db" />

          <View>
            <Text style={styles.textAlert}>
              Importante! {'\n'} 
              <Text style={styles.spanAlert}>Preencha todos os dados</Text>
            </Text>
          </View>
        </View>
      </View> 
  )
}