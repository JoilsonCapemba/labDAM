import { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation, useRoute } from '@react-navigation/native'

interface noteType{
  title: string
  description: string
}

export default function AddNote(props){
  const [note, setNote] = useState()
  const [titleNote, setTitleNote] = useState('')
  const [descriptionNote, setDescriptionNote] = useState('')
  const route = useRoute()

  function add(){
    route.params.notes.push(titleNote)
    props.navigation.navigate('listNotes', {titleNote})
  }



  return(
    <View style={styles.container}>
      <TextInput placeholder='Titulo'
       style={styles.titleNewNote}
       placeholderTextColor={'#fff'}
       onChangeText={newTitleNote => setTitleNote(newTitleNote)}/>

      <TextInput placeholder='Digite aqui a sua nota'
        style={styles.descriptioNewNote}
        placeholderTextColor={'#fff'}
        onChangeText={newDescriptionNote => setDescriptionNote(newDescriptionNote)}
        />

      <View style={styles.btnContent}>
        <TouchableOpacity style={styles.btnNew} onPress={add}>
          <Text style={styles.textNew}>Ok</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel} onPress={()=> {
          props.navigation.navigate('listNotes', {note})
        }}>
            <Text style={styles.textNew}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}