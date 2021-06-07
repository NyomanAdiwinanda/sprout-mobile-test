import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function CircleButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 100,
    position: 'absolute',
  },
});
