import React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

export const RecordCard = ({ onPress, title, subtitle }: { onPress: () => void, title: string, subtitle: string}  ) => {
  return (
    <Card.Title
      title={title}
      subtitle={subtitle}
      left={(props) => <Avatar.Icon {...props} icon="calculator" />}
      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={onPress} />}
      style={{
        backgroundColor: '#ffff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        borderRadius: 10
      }}
    />
  );
};

const styles = {
  container: 'flex flex-1 m-6',
};
