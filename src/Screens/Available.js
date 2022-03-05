import { View, Text, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import AvailableStyles from '../assets/Styles/AvailableStyles'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Fontisto'
import ButtonUni from '../component/ButtonUni'


export default function Available() {


  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>

      <TouchableOpacity
        style={{ height: 22, width: 20 }}
        onPress={() => navigation.goBack()}>
        <Icon1 name='arrow-back' size={25} color={'#05CE91'}
          style={AvailableStyles.arrow} />
      </TouchableOpacity>


      <Text style={AvailableStyles.cong}>
        Congratulations!
      </Text>
      <View style={{ alignSelf: 'center', flexDirection: 'row', top: 200 }}>
        <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 20 }}>We are</Text>
        <Text style={{ color: "#05CE91", left: 3, fontFamily: 'Nunito-Medium', fontSize: 20 }}>Glad</Text>
        <Text style={{ color: '#565656', left: 6, fontFamily: 'Nunito-Medium', fontSize: 20 }}>to find you near us!</Text>
      </View>

      <View style={AvailableStyles.textinput}>
        <TextInput placeholder='Search your area...'

          defaultValue='Business man colony Rahim Yar Khan'

          style={AvailableStyles.TextInput}
          onFocus={() => { navigation.navigate('location') }}
        />
        <Icon2 name='map-marker-alt' size={20} color="#05CE91"
          style={AvailableStyles.map}
        />
      </View>
      <View style={{ top: 240 }}>
        <ButtonUni title={"Login"} Press={() => navigation.navigate("login")} />
      </View>
      <View style={{ flexDirection: 'row', top: 300, left: 100 }}>
        <Text style={{ left: 82, fontSize: 20, fontFamily: 'Nunito-Medium', color: '#565656' }}>Or</Text>
        <Text style={{ fontSize: 20, color: '#565656' }}>________       ________</Text>
      </View>

      <View>
        <Text style={AvailableStyles.acc}>Don’t have an account?</Text>
        <TouchableOpacity style={AvailableStyles.Register}>
          <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 20, bottom: 2, color: '#05CE91' }}>Register</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 20, top: 297, left: 198, color: '#565656' }}>Now.</Text>
      </View>

    </View>
  )
}