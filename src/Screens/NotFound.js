import { View, Text } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'



export default function NotFound() {
    const navigation = useNavigation();

    return (
        <View>
            <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                onPress={() => { navigation.goBack() }}
            />
        </View>
    )
}