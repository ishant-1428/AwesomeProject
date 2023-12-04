import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CounterScreen = () => {
  const count = useSelector((state) => state.count);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
