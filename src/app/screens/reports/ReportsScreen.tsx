import React from 'react';
import { View, Text } from 'react-native';

export default function ReportsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Daily Machine Summary</Text>

      <Text>Active Time: 05:20</Text>
      <Text>Idle Time: 01:40</Text>
      <Text>Top Reason: Changeover</Text>
    </View>
  );
}
