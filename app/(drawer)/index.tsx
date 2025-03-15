import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Modal, TextInput } from 'react-native-paper';
import Animated, {
  BounceInRight,
  BounceOutLeft,
  LinearTransition,
  ReduceMotion,
  SequencedTransition,
} from 'react-native-reanimated';

import { AddButton } from '~/components/AddButton';
import { RecordCard } from '~/components/RecordCard';
import { useSavingsStore } from '~/store/store';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');

  const formatAmount = (amount: string) => {
    setFormattedAmount(amount.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const hideModal = () => {
    setTitleInput('');
    setAmountInput('');
    setFormattedAmount('');
    setModalVisible(false);
  };
  const showModal = () => setModalVisible(true);

  const currentAccounts = useSavingsStore((state) => state.currentAccounts);

  const { addAccount, deleteAccount } = useSavingsStore((state) => state);

  const addAccountHandler = () => {
    addAccount({
      title: titleInput,
      amount: Number(amountInput),
      id: `${titleInput}${Math.random()}`,
    });
    hideModal();
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 gap-y-5 px-5 pt-5">
        <Text className="text-3xl font-semibold">Good day,</Text>
        {/* <ScreenContent path="app/(drawer)/index.tsx" title="Home" /> */}
        <FlatList
          data={currentAccounts}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ marginTop: 5 }}
          renderItem={({ item }) => (
            <Animated.View
              entering={BounceInRight.duration(600).delay(200)}
              exiting={BounceOutLeft.duration(600).delay(200)}
              layout={SequencedTransition.duration(500)
                .delay(200)
                .reverse()
                .reduceMotion(ReduceMotion.Never)}
              style={{
                borderRadius: 10,
                marginVertical: 5,
                zIndex: 1,
              }}>
              <RecordCard
                key={item.id}
                title={item.title}
                amount={item.amount}
                onCardPress={() => alert('card tocuhed')}
                onPress={() => deleteAccount(item.id)}
              />
            </Animated.View>
          )}
        />

        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={{
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View className="gap-y-5">
            <Text className="text-2xl">Add Account</Text>
            <TextInput label="Account Name" value={titleInput} onChangeText={setTitleInput} />
            <TextInput
              label="Current Balance"
              placeholder='e.g. "1000"'
              value={formattedAmount ? formattedAmount : amountInput}
              onChangeText={setAmountInput}
              keyboardType="numeric"
              onFocus={() => setFormattedAmount(amountInput)}
              onBlur={() => formatAmount(amountInput)}
            />
          </View>
          <View className="gap-y-3 py-5">
            <Button mode="outlined" onPress={addAccountHandler}>
              Add
            </Button>
            <Button onPress={hideModal}>Cancel</Button>
          </View>
        </Modal>
        <AddButton onPress={showModal} />
      </View>
    </>
  );
}
