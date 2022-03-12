import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Newpass from '../assets/SVG/NewPass/Newpass.svg'
import { useNavigation } from '@react-navigation/native'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import NewStyles from '../assets/Styles/NewStyles'
import ButtonUni from '../component/ButtonUni'




export default function NewPassword() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>

            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('Profile')}>
                <Icon1 name="arrow-back-ios" size={20} color={'#05CE91'}
                    style={NewStyles.arrow} />
            </TouchableOpacity>

            <View style={{ alignSelf: 'center' }}>

                <Newpass style={{ top: 150, }} />

            </View>

            <View style={{ alignSelf: 'center', top: 170 }}>

                <Text style={{ color: '#05CE91', fontSize: 20, fontFamily: 'Nunito-Medium' }}>
                    Create New Password
                </Text>

            </View>

            <View style={NewStyles.inputtextArea1}>
                <TextInput
                    style={NewStyles.TextInputFi}
                    placeholder='Old Password' />
                <Icon2 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={NewStyles.inputtextArea2}>
                <TextInput
                    style={NewStyles.TextInputFi}
                    placeholder='Confirm Password' />
                <Icon2 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>
            <View style={NewStyles.inputtextArea3}>
                <TextInput
                    style={NewStyles.TextInputFi}
                    placeholder='Confirm New Password' />
                <Icon2 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>
            <View style={{ top: 284 }}>
                <ButtonUni title="Create Password" Press={() => { navigation.navigate('Profile') }} />
            </View>
        </View>
    )
}