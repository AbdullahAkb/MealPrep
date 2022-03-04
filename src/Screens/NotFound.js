import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import NotFoundStyles from '../assets/Styles/NotFoundStyles'
import Notfound from '../assets/SVG/NotFound/Notfound.svg'
import ButtonUni from '../component/ButtonUni'



export default function NotFound() {
    const navigation = useNavigation();


    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <TouchableOpacity
                style={{ height: 22, top: 20, left: 20, width: 20 }}
                onPress={() => { navigation.goBack() }}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={NotFoundStyles.back}
                />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Text style={NotFoundStyles.text1}>Unfortunately :( </Text>
                <Text style={NotFoundStyles.text2}>We are not in your area yet!</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Notfound style={NotFoundStyles.notsvg} />
            </View>


            <View style={{ top: 258 }}>
                <ButtonUni  title="Try Another Location" Press={() => navigation.goBack()} />
            </View>



        </View >
    )
}