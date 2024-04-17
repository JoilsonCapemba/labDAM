import { useState } from 'react'
import {View, Text, ScrollView} from 'react-native'

interface Note{
  title: string
  description: string
}

export default function Home(){
  const [note, setNote] = useState()
  const [notes, setNotes] = useState([])



  return(
    <View>
      <Text>Notas</Text>

      <View>
        <ScrollView>
          {notes.map(noteResume => (
            <Text key={noteResume}>{noteResume}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}