import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB, Modal, TextInput } from 'react-native-paper';
import { Button } from './Button';

export const AddButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <>
      <FAB
        icon="plus"
        style={{ position: 'absolute', margin: 25, right: 0, bottom: 0 }}
        onPress={onPress}
        rippleColor="rgba(255, 255, 255, 0.4)" // Customize ripple color and opacity
      />
    </>
  );
};

const styles = {
  container: 'flex flex-1 m-6',
};
