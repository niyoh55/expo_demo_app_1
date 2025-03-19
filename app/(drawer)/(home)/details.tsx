import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const DetailsScreen = () => {
  const router = useRouter();

  const goBack = () => {
    // Navigate to the details screen
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button onPress={goBack}>navigateToDetails</Button>
    </View>
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
