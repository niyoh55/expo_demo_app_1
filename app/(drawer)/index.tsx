import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Modal, TextInput } from 'react-native-paper';

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

  const addAccount = useSavingsStore((state) => state.addAccount);

  const addAccountHandler = () => {
    addAccount({ title: titleInput, amount: Number(amountInput) });
    hideModal();
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 gap-y-5 px-5 pt-5">
        <Text className="text-3xl font-semibold">Good day,</Text>
        {/* <ScreenContent path="app/(drawer)/index.tsx" title="Home" /> */}
        {currentAccounts?.map((account) => (
          <RecordCard
            key={account.title}
            title={account.title}
            amount={account.amount}
            onCardPress={() => alert('card tocuhed')}
            onPress={() => alert('imma buss')}
          />
        ))}
        <AddButton onPress={showModal} />

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
      </View>
    </>
  );
}
