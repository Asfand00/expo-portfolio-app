import React, { useEffect } from 'react';
import { View } from 'react-native';
import HomePage from "./HomePage";
import { styles } from '../assets/css';
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

