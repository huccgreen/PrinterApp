//import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUp = ({navigation}) => {
  const name = 'SignUp';

  return (
    <>
      <View>
        <Text> This is {name}</Text>
        <Button
          title="Go to List Of Jobs"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};

export default SignUp;
