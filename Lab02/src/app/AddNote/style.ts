import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    gap: 10
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  btnNew:{
    backgroundColor: '#771b6f',
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNew:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnCancel:{
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})