import { Stack, useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-paper';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const DetailsScreen = () => {
  const router = useRouter();
  const { id, name, amount } = useLocalSearchParams();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{amount}</Text>

        <Button onPress={goBack}>{'navigateToDetails'}</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
