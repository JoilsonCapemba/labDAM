import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function AddNote(){
  return(
    <View>
      <TextInput placeholder='Titulo' />

      <View>
        <TextInput />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Ok</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}