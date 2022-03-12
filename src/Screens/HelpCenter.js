import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Miniheader from '../component/Miniheader'
import { useNavigation } from '@react-navigation/native'
import Help from '../assets/SVG/HelpCenter/Help.svg'
import ButtonUni from '../component/ButtonUni'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import DropDown from '../component/DropDown'


export default function HelpCenter() {
    const naviagtion = useNavigation();
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Miniheader title="Help Center" Press={() => naviagtion.navigate('Home')} />

            <View style={{ alignSelf: 'center', top: 100 }}>
                <Help />
            </View>
            <View style={{ top: 130 }}>
                <ButtonUni title="Contact Us" Press={()=>naviagtion.navigate('Home')}/>
            </View>

            <Text style={{ top: 200, left: 40, color: "#565656", fontFamily: 'Nunito-Medium', fontSize: 18 }}>
                FAQs
            </Text>

            <View style={{ top: 220 }}>
                <DropDown title="How does Meal Prep work?" />
            </View>

            <View style={{ top: 235 }}>
                <DropDown title="When can I expect my Food?" />
            </View>

            <View style={{ top: 250 }}>
                <DropDown title="Can I order in advance?" />
            </View>

            <View style={{ top: 265 }}>
                <DropDown title="How to use Vouchers?" />
            </View>

            <View style={{ top: 280 }}>
                <DropDown title="I want to cancel my order?" />
            </View>

            <View style={{ top: 295 }}>
                <DropDown title="How much is delivery fee?" />
            </View>


        </View>
    )
}