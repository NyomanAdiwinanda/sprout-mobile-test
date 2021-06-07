import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveId } from '../store/actions.js';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Status from './Status.jsx';

const { width } = Dimensions.get('window');

export default function Contact(props) {
  const activeId = useSelector((state) => state.activeId);

  const dispatch = useDispatch();

  const handleOnPress = (id) => {
    dispatch(setActiveId(id));
  };

  if (activeId === props.id) {
    return (
      <TouchableOpacity onPress={() => handleOnPress(props.id)}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c4a0e6',
            width: width,
            height: 120,
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: props.avatar,
            }}
          />
          <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>
              {props.email}
            </Text>
          </View>
          <View style={styles.status}>
            <Foundation
              name="telephone"
              style={{ paddingRight: 10 }}
              size={30}
              color="white"
            />
            <Ionicons name="chatbox-outline" size={30} color="white" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={() => handleOnPress(props.id)}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: props.id % 2 === 0 ? 'white' : '#f3f3f3',
          width: width,
          height: 120,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: props.avatar,
          }}
        />
        <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>
            {props.firstName} {props.lastName}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>
            {props.email}
          </Text>
        </View>
        <View style={styles.status}>
          <Status online={props.online} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
  },
  status: {
    position: 'absolute',
    right: 20,
    top: 50,
    flexDirection: 'row',
  },
});
