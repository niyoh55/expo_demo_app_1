import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export const RecordCard = ({
  onPress,
  title,
  amount,
  onCardPress,
}: {
  onPress: () => void;
  onCardPress: () => void;
  title: string;
  amount: number;
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onCardPress}>
      <Card.Title
        title={<Text className="text-2xl font-bold">{title}</Text>}
        subtitle={
          <Text className="text-lg font-medium">
            <Text className="font-extrabold">{`\u20B1`}</Text>
            {`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.00`}
          </Text>
        }
        left={(props) => <Avatar.Icon {...props} icon="cash" />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={onPress} />}
        style={{
          backgroundColor: '#ffff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 10,
          elevation: 5,
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = {
  container: 'flex flex-1 m-6',
};
