import { View, Text } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
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
import DrawerContent from './DrawerContent';
import Favourites from '../Screens/Favourites';
import DrawerIcon from '../assets/SVG/MainPage/DrawerIcon.svg'
import HeartDrawer from '../assets/SVG/MainPage/HeartDrawer.svg'
import { MainHeader } from '../component/MainHeader';
import Icon1 from 'react-native-vector-icons/Octicons';
import Orders from '../Screens/Orders';
import OrdersDrawer from '../assets/SVG/MainPage/OrdersDrawer.svg'
import Profile from '../Screens/Profile';
import Icon2 from 'react-native-vector-icons/Feather'


const Stack = createNativeStackNavigator();
export default function StackNavigation(props) {


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

                <Stack.Screen name='otp' component={OTP} />
                <Stack.Screen name='newpass' component={NewPass} />
                <Stack.Screen name='register' component={Register} />

                <Stack.Screen name='drawer' component={DrawNav} />
                <Stack.Screen name='mainpage' component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const Draw = createDrawerNavigator();
export function DrawNav() {

    return (

        <Draw.Navigator
            drawerContent={props => <DrawerContent   {...props} />}
            screenOptions={{
                // headerShown: false,
                drawerActiveBackgroundColor: 'white',
                drawerActiveTintColor: "#949494",
                drawerInactiveTintColor: "#949494",
                drawerStyle: { width: 340 },
                drawerItemStyle: { paddingLeft: 15, top: 10 }
            }}>
            <Draw.Screen name='Home' component={MainPage}
                options={{
                    headerShown: false,
                    drawerLabelStyle: { fontSize: 16, fontFamily: 'Nunito-Medium', left: -16 },
                    drawerIcon: ({ color }) => (
                        <Icon1 name='home' size={20} color={"#05CE91"} />
                    )
                }} />

            <Draw.Screen name='Favourites' component={Favourites}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "white",
                    drawerActiveTintColor: 'white',
                    drawerLabelStyle: { fontSize: 16, fontFamily: 'Nunito-Medium', left: -16 },
                    drawerIcon: ({ color }) => (
                        <HeartDrawer />)


                }} />
            <Draw.Screen name='Orders' component={Orders}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "white",
                    drawerActiveTintColor: 'white',
                    drawerLabelStyle: { fontSize: 16, fontFamily: 'Nunito-Medium', left: -16 },
                    drawerIcon: ({ color }) => (
                        <Icon1 name="list-ordered" size={20} color={"#05CE91"} />)


                }} />

            <Draw.Screen name='Profile' component={Profile}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "white",
                    drawerActiveTintColor: 'white',
                    drawerLabelStyle: { fontSize: 16, fontFamily: 'Nunito-Medium', left: -16 },
                    drawerIcon: ({ color }) => (
                        <Icon2 name="user" size={20} color={"#05CE91"} />)


                }} />
        </Draw.Navigator>

    )

}