import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNotes from "../screens/ListNotes";
import AddNote from "../screens/AddNote/Index";
import Note from "../screens/Note/Index";


const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="listNotes"
        component={ListNotes}
      />
      <Screen
        name="addNote"
        component={AddNote}
      />
      <Screen
        name="note"
        component={Note}
      />
    </Navigator>
  )
}