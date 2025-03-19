import { DrawerToggleButton } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { Stack, Tabs, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-paper';

import { TabBarIcon } from '~/components/TabBarIcon';
export default function HomeLayout() {
  const navigation = useNavigation();
  return (
    <Stack
      initialRouteName="index"
      screenOptions={({ route, navigation }) => {
        return {
          animation: 'slide_from_right',
          headerShown: true,
          headerLeft: () => {
            if (route.name === 'index') {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  style={{ marginRight: 16 }}>
                  <Icon source="menu" size={24} color="#F5F5F5" />
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.pop()}
                  style={{ marginRight: 16 }}>
                  <Icon source="arrow-left-thick" size={24} color="#F5F5F5" />
                </TouchableOpacity>
              );
            }
          },
          headerStyle: {
            backgroundColor: '#1E1E2F',
            paddingVertical: 15,
            paddingHorizontal: 20,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          headerTitleStyle: {
            color: '#F5F5F5',
            fontSize: 22,
            fontWeight: 'bold',
            letterSpacing: 1.2,
            textAlign: 'center',
          },
        };
      }}>
      <Stack.Screen name="index" options={{ title: 'Main' }} />
      <Stack.Screen name="details" options={{ title: 'Details Screen' }} />
    </Stack>
  );
}
