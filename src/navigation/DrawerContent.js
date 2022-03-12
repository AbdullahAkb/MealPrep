import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'
import DrawerIcon from '../assets/SVG/MainPage/DrawerIcon.svg'
import Line from '../assets/SVG/Line.svg'
import Icon1 from 'react-native-vector-icons/MaterialIcons'

export default function DrawerContent(props) {


    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, }}>

            <View style={{ height: 225, width: 340, backgroundColor: "#05CE91" }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white', borderRadius: 30, height: 50, width: 50, left: 40,
                        top: 70
                    }}>
                        <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 40, textAlign: 'center', top: 2.4 }}>M</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 18, top: 80, left: 50, color: '#FFFFFF' }}>
                            Mr.Christopher
                        </Text>
                        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 16, top: 80, left: 50, color: '#FFFFFF' }}>
                            christopher123@gmail.com
                        </Text>
                    </View>
                </View>
                <View style={{ width: 280, height: 38.02, backgroundColor: 'white', top: 100, left: 30, borderRadius: 7 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 16, top: 10, left: 20, color: '#05CE91' }}>
                            Meal Credits
                        </Text>
                        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 16, top: 10, left: 150, color: '#05CE91' }}>
                            $12.00
                        </Text>

                    </View>
                </View>


            </View>


            {/* <DrawerContentScrollView {...props}> */}
            <DrawerItemList {...props} />
            {/* </DrawerContentScrollView> */}
            <View style={{ top: 10, left: 3 }}>
                {/* <Line /> */}
                <Text style={{ color: '#F2F2F2' }}>
                    ____________________________________________________________________
                </Text>
            </View>

            <View style={{ top: 25, left: 40 }}>
                <Text style={{ color: '#949494', fontSize: 16 }}>
                    Terms & Conditions
                </Text>
                <Text style={{ color: '#949494', fontSize: 16, top: 20 }}>
                    Privacy Policy
                </Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',right:30,top:170}}
            onPress={()=>{navigation.navigate('login')}}
            >
                <Text style={{color:"#05CE91",fontSize:16,right:5}}>
                Logout
                </Text>
                <Icon1 name='logout' size={20} color="#05CE91"/>
            </TouchableOpacity>




        </View>

    )
}