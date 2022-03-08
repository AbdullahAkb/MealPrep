import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Entypo'



export default function MinusMini(props) {
    return (
        <TouchableOpacity
            onPress={props.Press()}
            style={{ height: 12.99, width: 12.99, backgroundColor: '#05CE91', borderRadius: 3, alignItems: 'center' }}>
            <Icon1 style={{ top: 1 }} name="minus" size={10} color={"white"} />
        </TouchableOpacity>
    )
}