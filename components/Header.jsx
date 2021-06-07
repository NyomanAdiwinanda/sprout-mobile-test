import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Entypo
        name="menu"
        size={30}
        color="white"
        style={{ position: 'absolute', left: 20 }}
        onPress={props.press}
      />
      <Text style={styles.text}>CONTACTS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#01caa8',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 80,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
