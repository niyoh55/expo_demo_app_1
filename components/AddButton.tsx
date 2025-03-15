import React from 'react';
import { Text } from 'react-native';
import { FAB, Modal} from 'react-native-paper';

export const AddButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <>
      <FAB
        icon="plus"
        style={{ position: 'absolute', margin: 25, right: 0, bottom: 0 }}
        onPress={onPress}
        rippleColor="rgba(255, 255, 255, 0.4)" // Customize ripple color and opacity
      />
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={tw`bg-white p-4 mx-4 rounded-lg`}
        >
        <Text className="text-2xl">Add Item</Text>
        <TextInput label="Input 1" value={input1} onChangeText={setInput1} style={tw`mb-2`} />
        <TextInput label="Input 2" value={input2} onChangeText={setInput2} style={tw`mb-4`} />
        <View style={tw`flex-row justify-end`}>
          <Button onPress={hideModal} style={tw`mr-2`}>
            Cancel
          </Button>
          <Button onPress={handleAdd}>Add</Button>
        </View>
      </Modal>
    </>
  );
};

const styles = {
  container: 'flex flex-1 m-6',
};
