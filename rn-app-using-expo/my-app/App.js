import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Globomantics">
        <Stack.Screen name="Globomantics" component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


