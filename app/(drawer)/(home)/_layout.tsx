import { DrawerToggleButton } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { Stack, Tabs, useNavigation } from 'expo-router';
import { Button } from 'react-native-paper';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function HomeLayout() {
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            open drawer
          </Button>
        ),
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
