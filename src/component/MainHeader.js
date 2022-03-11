import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Pressable } from 'react-native'
import React from 'react'
import MainPageStyles from '../assets/Styles/MainPageStyles'
import DrawerIcon from '../assets/SVG/MainPage/DrawerIcon.svg'
import Recp from '../assets/SVG/MainPage/Recp.svg'
import { useState } from 'react'
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Pizza from '../assets/SVG/MainPage/Foods/Pizza.svg'
import Chicken from '../assets/SVG/MainPage/Foods/Chicken.svg'
import BreakFast from '../assets/SVG/MainPage/Foods/BreakFast.svg'
import Chinese from '../assets/SVG/MainPage/Foods/Chinese.svg'
import Spag from '../assets/SVG/MainPage/FlatFoods/Spag.svg'
import Spag1 from '../assets/SVG/MainPage/FlatFoods/Spag1.svg'
import Spag2 from '../assets/SVG/MainPage/FlatFoods/Spag2.svg'
import StarRating from 'react-native-star-rating';
import PlusMini from '../component/PlusMini'
import MinusMini from '../component/MinusMini'
import { FoodFlatList } from '../component/FoodFlatList'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';




const MainHeader = (props) => {
    return (
        <View style={MainPageStyles.header}>


            <TouchableOpacity style={{ width: 25, top: 20, left: 26.75 }}
                onPress={() => props.Press()}
            >
                <DrawerIcon />
            </TouchableOpacity>

            <View style={{ top: 16, left: 45 }}>
                <Text style={{ color: '#05CE91', fontSize: 18, fontFamily: 'Nunito-Medium' }}>
                    Business Man colony
                </Text>
                <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 15 }}>
                    Rahim Yar Khan
                </Text>
            </View>

            <TouchableOpacity style={{ height: 18, width: 20, top: 25, left: 180 }}>
                <Recp />
            </TouchableOpacity>

        </View >
    )
}

export { MainHeader }