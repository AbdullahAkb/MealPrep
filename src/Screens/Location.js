import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import LocationStyles from '../assets/Styles/LocationStyle'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import MapImage from '../assets/SVG/Location/MapImage.svg'
import ButtonUni from '../component/ButtonUni'





export default function Location() {

    const navigation = useNavigation();


    const onpr = () => {
        navigation.navigate('available')
    }


    return (
        <View>
            <View style={LocationStyles.header}>
                <Icon1 name='arrow-back' size={25} color={'#05CE91'}
                    style={LocationStyles.arrow}
                    onPress={() => navigation.goBack()}
                />
                <View style={LocationStyles.input}>
                    <TextInput
                        // placeholder='Business man colony Rahim Ya.. '
                        placeholderTextColor={'#565656'}
                        defaultValue="Business man colony Rahim Ya.. "
                        style={LocationStyles.textInput}

                    />
                </View>

                <Icon2 name='map-marker-alt' size={20} color={'#05CE91'}
                    onPress={() => { navigation.navigate('notFound') }}

                    style={LocationStyles.map} />
            </View>

            <MapImage />

            <View style={{position:'absolute',top:700,left:193}}>
                <ButtonUni title={"Set Location"} Press={onpr} />

            </View>

            
        </View>
    )
}