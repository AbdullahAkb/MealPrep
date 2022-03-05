import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import OtpStyles from '../assets/Styles/OtpStyles'
import OTPSrc from '../assets/SVG/OTP/OTPSrc.svg'
import ButtonUni from '../component/ButtonUni'
import OTPInputView from '@twotalltotems/react-native-otp-input'



export default function OTP() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('login')}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={OtpStyles.arrow} />
            </TouchableOpacity>

            <View style={{ alignSelf: 'center', top: 170 }}>
                <OTPSrc />
            </View>
            <View style={{ justifyContent: 'center', width: 200, alignSelf: 'center', top: 190 }}>
                <Text style={OtpStyles.forgotText}>We have sent you an OTP, Enter in fields to get verified.</Text>

            </View>


            <OTPInputView
            
                style={{ height: 40, width: 90, top: 210, left: 80, }}
                pinCount={5}
                codeInputFieldStyle={OtpStyles.underlineStyleBase}

            />
            <View style={{ top: 230 }}>
                <ButtonUni
                    title="Confirm" />
            </View>


            <View style={{ top: 290 }}>
                <Text style={OtpStyles.Textcode}>Didn’t get the Code?</Text>
            </View>
            <TouchableOpacity style={OtpStyles.send}>
                <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18, bottom: 2 }}>Send again</Text>
            </TouchableOpacity>

        </View>
    )
}