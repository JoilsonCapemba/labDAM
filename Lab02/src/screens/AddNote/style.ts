import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    gap: 10,
    padding: 10
  },
  titleNewNote:{
    fontSize: 24,
    backgroundColor: '#111',
    color: '#fff',
    width: '100%',
    borderRadius: 10,
    height: 50,
    marginTop: 50
  },
  descriptioNewNote:{
    fontSize: 24,
    backgroundColor: '#111',
    color: '#fff',
    width: '100%',
    borderRadius: 10,
    height: 200,
  },
  btnContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    marginTop: 30
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
    backgroundColor: '#771b6f',
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})