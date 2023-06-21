import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  areaAdds: {
    width: 327,
    marginTop: 22,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E3F1',
    borderRadius: 2,
  },
  
  button: {
    backgroundColor: '#6B5BD4',
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  
  textButton: {
    color: '#ffff',
    fontWeight: '600',
  },
  
  alertArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    fontFamily: 'Roboto_400Regular',
  },
  
  textAlert: {
    color: '#6B5BD4',
    fontFamily: 'Roboto_400Regular',
  },
  
  spanAlert: {
    color: '#9793AE',
    fontFamily: 'Roboto_400Regular',
  },
})