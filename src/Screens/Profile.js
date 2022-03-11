import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Profile1 from '../assets/SVG/MainPage/Profile1.svg'
import ProfilePic from '../assets/SVG/MainPage/ProfilePic.svg'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import ButtonUni from '../component/ButtonUni'


export default function Profile() {


  const navigation = useNavigation();



  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar
        backgroundColor={"#05CE91"}
      />


      <View style={{
        backgroundColor: '#05CE91', height: 233, borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,elevation:10
      }}>
        <View style={{ top: 35, left: 30, flexDirection: 'row' }}>
          <Icon1
            name="arrow-back-ios" size={20} color={"white"}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={{ color: 'white', left: 20, fontFamily: 'Nunito-Medium', fontSize: 18 }}>
            Profile
          </Text>
          <View style={{ left: 130, bottom: 50 }}>
            <Profile1 />
          </View>
        </View>
        <View style={{ alignSelf: 'center', top: 20 }}>
          <ProfilePic />
          <TouchableOpacity style={{
            backgroundColor: '#05CE91', width: 20, height: 20, left: 98,
            borderRadius: 15, bottom: 35
          }}>
            <Icon2 name='camera' color={"white"} size={10}
              style={{ alignSelf: 'center', top: 4 }}
            />
          </TouchableOpacity>
        </View>

      </View>

      <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 70, textAlign: 'center' }}>
        Mr. Christopher
      </Text>

      <View style={{ top: 80, marginLeft: 30, borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: '#F2F2F2' }}>
        <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18 }}>
          Name
        </Text>
        <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10 }}>
          Christopher Henry
        </Text>
      </View>
      <View style={{ top: 90, marginLeft: 30, borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: '#F2F2F2' }}>
        <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18 }}>
          Email
        </Text>
        <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10 }}>
          christopher123@gmail.com
        </Text>
      </View>

      <View style={{
        top: 100, marginLeft: 30, borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: '#F2F2F2',
        flexDirection: 'row'
      }}>
        <View>
          <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18 }}>
            Password
          </Text>
          <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10 }}>
            *********
          </Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: 'white', width: 25, height: 25, left: 210,
          borderRadius: 15, bottom: 35, top: 19,
        }}>
          <Icon3 name='pencil-square-o' size={15} color="#949494"
            style={{ alignSelf: 'center', top: 6 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{
        top: 110, marginLeft: 30, borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: '#F2F2F2',
        flexDirection: 'row'
      }}>
        <View>
          <Text style={{ color: '#05CE91', fontFamily: 'Nunito-Medium', fontSize: 18 }}>
            Phone
          </Text>
          <Text style={{ color: '#565656', fontFamily: 'Nunito-Medium', fontSize: 18, top: 10 }}>
            +1 321 456 789
          </Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: 'white', width: 25, height: 25, left: 167,
          borderRadius: 15, bottom: 35, top: 19,
        }}>
          <Icon3 name='pencil-square-o' size={15} color="#949494"
            style={{ alignSelf: 'center', top: 6 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{top:210}}>
        <ButtonUni title="Save Profile" Press={()=>navigation.navigate('Home')}/>

      </View>
    </View>
  )
}