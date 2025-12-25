import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/home/HomeScreen';
import AlertsScreen from '@app/screens/alerts/AlertsScreen';
import ReportsScreen from '@app/screens/reports/ReportsScreen';
import { useAuthStore } from '@store/auth.store';

export type TabParamList = {
  Home: undefined;
  Alerts: undefined;
  Reports: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const role = useAuthStore(state => state.role);

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={HomeScreen} />

      {role === 'supervisor' && (
        <Tab.Screen name="Alerts" component={AlertsScreen} />
      )}

      <Tab.Screen name="Reports" component={ReportsScreen} />
    </Tab.Navigator>
  );
}
