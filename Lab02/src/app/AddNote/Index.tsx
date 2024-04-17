import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'


export default function AddNote(){
  const [note, setNote] = useState()
  
  function handleCreateNote(){

  }


  return(
    <View style={styles.container}>
      <TextInput placeholder='Titulo' />

      <TextInput placeholder=''/>

      <View>
        <TouchableOpacity style={styles.btnNew}>
          <Text style={styles.textNew}>Ok</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel}>
          <Text style={styles.textNew}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}