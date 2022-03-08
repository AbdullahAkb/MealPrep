import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import RegisterStyles from '../assets/Styles/RegisterStyles'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react'


import { useNavigation } from '@react-navigation/native'
import ButtonUni from '../component/ButtonUni'




export default function Register() {


    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();


    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <TouchableOpacity
                style={{ height: 22, width: 20 }}
                onPress={() => navigation.navigate('login')}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={RegisterStyles.arrow} />
            </TouchableOpacity>

            <View style={{ alignSelf: 'center', top: 200 }}>
                <Text style={{ fontSize: 50, color: '#05CE91', fontFamily: 'Hello Valentina' }}>Registeration</Text>

            </View>

            <View style={RegisterStyles.inputtextArea1}>
                <TextInput
                    style={RegisterStyles.TextInputFi}
                    placeholder='Email Address' />
                <Icon2 name='mail' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={RegisterStyles.inputtextArea2}>
                <TextInput
                    style={RegisterStyles.TextInputFi}
                    placeholder='Username' />
                <Icon3 name='user' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={RegisterStyles.inputtextArea3}>
                <TextInput
                    style={RegisterStyles.TextInputFi}
                    placeholder='Password' />
                <Icon4 name='lock-open' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>

            <View style={RegisterStyles.inputtextArea4}>
                <TextInput
                    style={RegisterStyles.TextInputFi}
                    placeholder='Confirm password' />
                <Icon4 name='lock-open' size={20} color={'#949494'}
                    style={{ top: 12 }} />
            </View>


            <View style={{ flexDirection: 'row', left: 35, top: 300 }}>


                <CheckBox
                    style={{}}
                    disabled={false}
                    value={toggleCheckBox}
                    tintColor="#05CE91"
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <View style={{width:300,top:4}}>
                    <Text style={{fontFamily:'Nunito-Medium',fontSize: 13}}>
                        I agree to the Terms of Services, Privacy Policy & Default notification settings of the Meal Prep App.
                    </Text>
                </View>
            </View>

            <View style={{ top: 320 }}>
                <ButtonUni
                    dis={!toggleCheckBox}
                    title="Register" Press={() => { navigation.navigate('login') }} />
            </View>


        </View>
    )
}