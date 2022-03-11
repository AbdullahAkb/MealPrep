import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/MaterialIcons'


export default function Miniheader(props) {
    return (

        <View style={{ flexDirection: 'row' }}>
            <View style={{ left: 30, top: 20 }}>
                <Icon1
                    name="arrow-back-ios" size={20} color={"#05CE91"}
                    onPress={() => props.Press()}
                />
            </View>

            <Text style={{ color: '#3D3D3D', top: 20, left: 40, fontFamily: 'Nunito-Medium', fontSize: 18 }}>

                {props.title}
            </Text>
        </View>

    )
}