import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Avatar, Card, FAB, IconButton, shadow } from 'react-native-paper';
import { AddButton } from '~/components/AddButton';

import { Container } from '~/components/Container';
import { RecordCard } from '~/components/RecordCard';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className='flex-1 gap-y-5 px-3 pt-5'>
        {/* <ScreenContent path="app/(drawer)/index.tsx" title="Home" /> */}
        <RecordCard onPress={() => alert('ambatubust')} title='TestRecord1' subtitle='test'/>
        <RecordCard onPress={() => alert('ambatubust')} title='TestRecord2' subtitle='test'/>
        <RecordCard onPress={() => alert('ambatubust')} title='TestRecord3' subtitle='test'/>
        <AddButton onPress={() => alert('ambatubust')} />
      </View>
    </>
  );
}
