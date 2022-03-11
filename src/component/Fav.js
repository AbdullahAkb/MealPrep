import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Spaga from '../assets/SVG/MainPage/Foods/Spaga.svg'
import Icon1 from 'react-native-vector-icons/AntDesign'


export default function Fav() {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#F5FFFC', height: 90, width: 310,alignSelf:'center', borderRadius: 9,
        }}>
            <View style={{ flexDirection: 'row', }}>

                <View style={{ top: 10, left: 20 }}>
                    <Spaga />
                </View>
                <View>
                    <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10, left: 25 }}>
                        Spaghetti Bolognese
                    </Text>
                    <Text style={{ color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 15, top: 17, left: 25 }}>
                        1 x Meal
                    </Text>
                    <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18, top: 25, left: 25 }}>
                        $6.99
                    </Text>
                </View>
                <Icon1
                    style={{ top: 35, left: 60 }}
                    name='heart' size={18.5} color="red" />
            </View>
        </TouchableOpacity>
    )
}