import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash/Splash';
import Welcome from '../Screens/Welcome';
import Location from '../Screens/Location';
import NotFound from '../Screens/NotFound'
import Available from '../Screens/Available';
import Login from '../Screens/Login';
import MainPage from '../Screens/MainPage';
import Forgot from '../Screens/Forgot';
import OTP from '../Screens/OTP';
import NewPass from '../Screens/NewPass';
import Register from '../Screens/Register'
import { createDrawerNavigator } from '@react-navigation/drawer'



const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='splash' component={Splash} />
                <Stack.Screen name='welcome' component={Welcome} />
                <Stack.Screen name='location' component={Location} />
                <Stack.Screen name='notFound' component={NotFound} />
                <Stack.Screen name='available' component={Available} />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='forgot' component={Forgot} />
                <Stack.Screen name='mainpage' component={MainPage} />
                <Stack.Screen name='otp' component={OTP} />
                <Stack.Screen name='newpass' component={NewPass} />
                <Stack.Screen name='register' component={Register} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


const Draw = createDrawerNavigator();
export function DrawNav() {

    return (

        <Draw.Navigator screenOptions={{ headerShown: false }}>

        </Draw.Navigator>

    )

}