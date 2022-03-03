import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash/Splash';
import Welcome from '../Screens/Welcome';
import Location from '../Screens/Location';




const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='splash' component={Splash} />
                <Stack.Screen name='welcome' component={Welcome} />
                <Stack.Screen name='location' component={Location} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}