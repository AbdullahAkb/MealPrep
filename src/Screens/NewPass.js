import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Newpass from '../assets/SVG/NewPass/Newpass.svg'
import { useNavigation } from '@react-navigation/native'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import NewPassStyles from '../assets/Styles/NewPassStyles'
import ButtonUni from '../component/ButtonUni'




export default function NewPass() {


    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>

            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('otp')}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={NewPassStyles.arrow} />
            </TouchableOpacity>

            <View style={{ alignSelf: 'center' }}>

                <Newpass style={{ top: 200, }} />

            </View>

            <View style={{ alignSelf: 'center', top: 220 }}>

                <Text style={{ color: '#05CE91', fontSize: 20, fontFamily: 'Nunito-Medium' }}>
                    Create New Password
                </Text>

            </View>

            <View style={NewPassStyles.inputtextArea1}>
                <TextInput
                    style={NewPassStyles.TextInputFi}
                    placeholder='New Password' />
                <Icon2 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={NewPassStyles.inputtextArea2}>
                <TextInput
                    style={NewPassStyles.TextInputFi}
                    placeholder='Confirm Password' />
                <Icon2 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>
            <View style={{ top: 284 }}>
                <ButtonUni title="Create Password" Press={() => { navigation.navigate('login') }} />
            </View>
        </View>
    )
}