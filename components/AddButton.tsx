import React from "react";
import { Avatar, Card, FAB, IconButton, shadow } from 'react-native-paper';

export const AddButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <FAB
      icon="plus"
      style={{ position: 'absolute', margin: 25, right: 0, bottom: 0 }}
      onPress={onPress}
      rippleColor="rgba(255, 255, 255, 0.4)" // Customize ripple color and opacity
    />
  );
};

const styles = {
  container: 'flex flex-1 m-6',
};
