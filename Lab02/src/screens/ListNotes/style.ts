import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    gap: 10
  },
  header:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    marginBottom: 20,
    marginTop: 50
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  list:{
    flexDirection: 'column',
    width: 300,
    gap: 10
  },
  itemList:{
    backgroundColor: '#3a283e',
    color: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 20
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
  } 
})