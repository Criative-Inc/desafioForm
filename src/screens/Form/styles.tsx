import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    padding: 13,
    backgroundColor: '#fff', 
    gap: 8,
    borderRadius: 8,
  },

  h2: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    fontWeight: "500",
    color: "#373252",
  },

  line: {
    width: 295,
    height: 0.5,
    backgroundColor: "#F4F2FC",
    marginBottom: 30,
  },

  label: {
    textAlign: 'left',
    color: '#9793AE',
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'Roboto_400Regular',
  },

  input: {
    width: 295,
    height: 56,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontFamily: 'Roboto_400Regular',
  },

  termos: {
    marginTop: 3,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    margin: 8,
  },

  textTermos: {
    color: '#767191',
    fontFamily: 'Roboto_400Regular',
  },
});