import React from 'react';
import { View, Text } from 'react-native';

export default function Status(props) {
  return (
    <View
      style={{
        backgroundColor: props.online === 1 ? 'green' : 'red',
        width: 15,
        height: 15,
        borderRadius: 100,
      }}
    ></View>
  );
}
