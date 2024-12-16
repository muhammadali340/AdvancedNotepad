import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';
import { NoteProvider } from './contexts/NoteContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Notes' }} />
          <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Edit Note' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
};

export default App;

