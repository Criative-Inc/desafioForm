import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Form } from './src/screens/Form/Form';
import { NavBar } from './src/screens/NavBar/NavBar';
import { AreaAlert } from './src/screens/areaAlert/AreaAlert';

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView>
        <NavBar />
        <View style={styles.mainContent}>
          <Form />
          <AreaAlert />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    height: "100%",
    backgroundColor: "#F3F2F7",
    padding: 6,

    alignItems: 'center',
  }
});