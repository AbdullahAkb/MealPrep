import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import LoginStyles from '../assets/Styles/LoginStyles'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Feather'
import ButtonUni from '../component/ButtonUni'
import Google from '../assets/SVG/Login/Google.svg'
import FaceBook from '../assets/SVG/Login/FaceBook.svg'




export default function Login() {


    const navigation = useNavigation();


    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('location')}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={LoginStyles.arrow} />
            </TouchableOpacity>
            <Text style={LoginStyles.loginText}>Login</Text>

            <View style={LoginStyles.inputtextArea}>
                <TextInput
                    style={LoginStyles.TextInputFi}
                    placeholder='Email or Phone' />
                <Icon2 name='mail' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={LoginStyles.inputtextArea1}>
                <TextInput
                    style={LoginStyles.TextInputFi}
                    placeholder='Password' />
                <Icon3 name='eye' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>
            <TouchableOpacity style={LoginStyles.forgotfield}

                onPress={() => { navigation.navigate("forgot") }}
            >
                <Text style={LoginStyles.forgot}>I forgot my password</Text>
            </TouchableOpacity>

            <View style={{ top: 280 }}>
                <ButtonUni title="Login" Press={() => { navigation.navigate("drawer") }} />
            </View>
            <View style={{ flexDirection: 'row', top: 340, left: 100 }}>
                <Text style={{ top: 4, left: 82, fontSize: 20, fontFamily: 'Nunito-Medium', color: '#565656' }}>Or</Text>
                <Text style={{ fontSize: 20, color: '#565656' }}>________       ________</Text>
            </View>

            <TouchableOpacity style={LoginStyles.Google}>

                <Google style={{ top: 10, left: 25 }} />
                <Text style={LoginStyles.googleText}>Continue with Google</Text>


            </TouchableOpacity>

            <TouchableOpacity style={LoginStyles.FaceBook}>

                <FaceBook style={{ top: 12, left: 27 }} />
                <Text style={LoginStyles.facebookText}>Continue with Facebook</Text>


            </TouchableOpacity>

        </View>
    )
}