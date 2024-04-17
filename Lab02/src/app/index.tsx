import { useState } from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { styles } from './style'

interface Note{
  title: string
  description: string
}

export default function Home(){
  const [note, setNote] = useState()
  const [notes, setNotes] = useState(['nota1', 'nota2', 'nota3'])



  return(
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Notas</Text>

        <TouchableOpacity style={styles.btnNew}>
          <Text style={styles.textNew}>New Note</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView style={styles.list}>
          {notes.map(noteResume => (
            <Text key={noteResume} style={styles.itemList}>{noteResume}</Text>
          ))}
        </ScrollView>
      </View>

    </View>
  )
}