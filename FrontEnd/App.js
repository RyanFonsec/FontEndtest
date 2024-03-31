import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CadastroA from './src/components/CadastroA'; 
import CadastroB from './src/components/CadastroB'; 

const Stack = createStackNavigator(); //função da navegação entre telas

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CadastroA" component={CadastroA} />
      <Stack.Screen name="CadastroB" component={CadastroB} />
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
