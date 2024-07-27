import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ApartmentListingScreen from './screens/ApartmentListingScreen';
import ApartmentDetailsScreen from './screens/ApartmentDetailsScreen';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApartmentListing">
        <Stack.Screen name="ApartmentListing" component={ApartmentListingScreen} options={{ title: 'Apartment Listings' }} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetailsScreen} options={{ title: 'Apartment Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
