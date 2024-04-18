import { useState } from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { styles } from './style'

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface Note{
  title: string
  description: string
}

export default function ListNotes(){
  const [notes, setNotes] = useState<String>([])
  const route = useRoute()

  const navigation = useNavigation()


  return(
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Notas</Text>

        <TouchableOpacity style={styles.btnNew} onPress={()=> { 
            
            navigation.navigate('addNote', {notes})}}> 
            <Text style={styles.textNew}>New Note</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView style={styles.list} >
          {notes.map(noteResume => (
            <Text key={noteResume} style={styles.itemList}>{noteResume}</Text>
          ))}
        </ScrollView>
      </View>

    </View>
  )
}