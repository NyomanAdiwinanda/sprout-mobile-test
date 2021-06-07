import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../store/actions.js';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header.jsx';
import ContactList from '../components/ContactList.jsx';
import CircleButton from '../components/CircleButton.jsx';

export default function Home({ navigation }) {
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading || !data) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text>Something is error</Text>
      </SafeAreaView>
    );
  }

  const onPress = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header press={onPress} />
      <ScrollView>
        {data.map((contact) => {
          return (
            <ContactList
              avatar={contact.avatar}
              firstName={contact.first_name}
              lastName={contact.last_name}
              email={contact.email}
              id={contact.id}
              online={Math.round(Math.random())}
              key={contact.id}
            />
          );
        })}
      </ScrollView>
      <ActionButton
        buttonColor="#01caa8"
        style={{ position: 'absolute', right: 20, bottom: 20 }}
      ></ActionButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
