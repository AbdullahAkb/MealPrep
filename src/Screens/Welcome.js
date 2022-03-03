import { View, Text, Image, StatusBar, TextInput } from 'react-native'
import React from 'react'
import WelcomeStyles from '../assets/Styles/WelcomeStyles'
import WelcomeLogo from '../assets/SVG/Welcome/WelcomeLogo.svg'
import Area from '../assets/SVG/Welcome/Area.svg'
import Icon1 from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'






export default function Welcome() {

    const navigation = useNavigation();




    return (
        <View style={WelcomeStyles.main}>
            <StatusBar backgroundColor={"#FFFFFF"} barStyle="dark-content" />
            <WelcomeLogo style={WelcomeStyles.logo} />
            <View>
                <Text style={WelcomeStyles.good}>Hey! Good to see you.</Text>
            </View>
            <View style={{
                flexDirection: 'row', top: 210
            }}>
                <Text style={WelcomeStyles.welcome}>
                    Welcome
                </Text>
                <Text style={WelcomeStyles.intro}>
                    to the App!
                </Text>
            </View>

            <Area style={WelcomeStyles.area} />
            <View style={{ top: 165 }}>
                <Text style={WelcomeStyles.check}>
                    Let’s Check
                </Text>
                <Text style={WelcomeStyles.check2}>
                    if we are able to serve in your area :)
                </Text>
            </View>
            <View style={WelcomeStyles.textinput}>
                <TextInput placeholder='Search your area...'
                    placeholderTextColor={'#949494'}

                    style={WelcomeStyles.TextInput}
                    onFocus={() => { navigation.navigate('location') }}
                />
                <Icon1 name='map-marker-alt' size={20} color="#05CE91"
                    style={WelcomeStyles.map}
                />
            </View>

        </View>
    )
}