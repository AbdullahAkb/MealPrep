import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Miniheader from '../component/Miniheader'
import { useNavigation } from '@react-navigation/native'
import Help from '../assets/SVG/HelpCenter/Help.svg'
import ButtonUni from '../component/ButtonUni'
import Icon1 from 'react-native-vector-icons/MaterialIcons'

export default function DropDown(props) {
    return (
        <TouchableOpacity style={{
            width: 300, height: 44,
            backgroundColor: '#F2F2F2', borderRadius: 7, alignSelf: 'center', flexDirection: 'row'
        }}
        >
            <Text style={{ color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10, left: 20 }}>
            {props.title}
            </Text>
            <Icon1
            style={{top:10,left:80}}
            name='keyboard-arrow-down' size={25} color="#949494"/>
        </TouchableOpacity>
    )
}