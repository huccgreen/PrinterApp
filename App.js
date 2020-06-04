/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import storage from '@react-native-firebase/storage';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './android/screens/SignIn';
import SignUp from './android/screens/SignUp';
import AuthTest from './android/screens/AuthTest';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AuthTest" component={AuthTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
