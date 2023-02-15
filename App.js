import React from 'react';
import { createStackNavigator, } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BookDetail, Home } from './src/screens';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}
const App = () => {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false,}}
      />
      <Stack.Screen name="BookDetails" component={BookDetail}  options={{title: 'BookDetails',headerShown: true, headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
