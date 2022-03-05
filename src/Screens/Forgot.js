import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import ForgotStyles from '../assets/Styles/ForgotStyles'
import Icon1 from 'react-native-vector-icons/Ionicons'
import ForgotSrc from '../assets/SVG/Forgot/ForgotSrc.svg'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Octicons'
import ButtonUni from '../component/ButtonUni'




export default function Forgot() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('login')}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={ForgotStyles.arrow} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center', top: 200 }}>
                <ForgotSrc />
            </View>
            <View style={{ justifyContent: 'center', width: 300, alignSelf: 'center', top: 220 }}>
                <Text style={ForgotStyles.forgotText}>Oops! Seems like you forgot your Password! Enter your registered Email or Phone to get an OTP and create new password.</Text>

            </View>

            <View style={ForgotStyles.inputtextArea}>
                <TextInput
                    style={ForgotStyles.TextInputFi}
                    placeholder='Email or Phone' />
                <Icon2 name='mail' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={{ top: 260 }}>
                <ButtonUni title={"Get Code"} Press={() => { navigation.navigate("otp") }} />
            </View>
        </View>
    )
}