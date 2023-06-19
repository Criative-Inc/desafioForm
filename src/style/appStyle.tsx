import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F7',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#6B5BD4',
    flexDirection: 'row',
    height: 93,
    alignItems: 'center',
  },
  headerContent: {
    fontSize: 20,
    marginLeft: 125.5,
    color: '#fff',
    fontWeight: '500',
  },
  headerImage: {
    width: 21,
    height: 28,
    marginLeft: 29,
  },
  containerForm: {
    width: 327,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 6,
    borderRadius: 8,
  },
  formTitle: {
    fontSize: 20,
    color: '#373252',
    marginTop: 13,
    marginLeft: 13,
    fontWeight: '500'
  },
  formLine: {
    width: 295,
    height: 1,
    alignSelf: 'center',
    marginTop: 6,
  },
  inputsContainer: {
    alignItems: 'center',
    marginTop: 37,
  },
  inputs: {
    backgroundColor: '#FCFCFF',
    height: 56,
    width: 295,
    borderRadius: 8,
    borderColor: '#E6E6F0',
    borderWidth: 1,
    padding: 16,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#6B5BD4',
    width: 295,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonContent: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  inputTitle: {
    fontSize: 12,
    color: '#9793AE',
    alignSelf: 'flex-start',
    marginBottom: 4,
    marginRight: 8,
  },
  erro: {
    color: '#ff375b',
    fontSize: 12,
  },
  boxCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    marginTop: 3,
  },
  checkbox: {
    marginRight: 8,
  },
  checkBoxtext: {
    fontSize: 15,
    color: '#767191',
    fontWeight: '400'
  },
  footer: {
    backgroundColor: '#F2F0FB',
    height: 168,
    width: 327,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 22,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: '#E5E3F1',
    borderWidth: 1,
    marginBottom: 53,
  },
  footerImage: {
    width: 36,
    height: 36,
  },
  alert: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 24,
    alignItems: 'center'
  },
  alertSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9793AE',
  },
  alertTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6B5BD4',
  },
  alertText: {
    marginLeft: 8.5,
  },
  boxError: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  erro2: {
    color: '#ff375b',
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 36,
  },
  boxErro2: {
    marginBottom: 45,
  }
});

export default styles