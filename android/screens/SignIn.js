//import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const SignIn = ({navigation}) => {
  const ScreenName = 'Home or SignIn';

  return (
    <>
      <View style={styles.mainDiv}>
        <Text> This is {ScreenName}</Text>
        <Button
          title="Go to SignUp"
          onPress={() => navigation.navigate('AuthTest')}
        />
        <TextInput style={styles.forText} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  forText: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default SignIn;
