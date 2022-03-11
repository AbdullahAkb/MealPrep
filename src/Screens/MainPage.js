import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, StatusBar } from 'react-native'
import React from 'react'
import MainPageStyles from '../assets/Styles/MainPageStyles'
import DrawerIcon from '../assets/SVG/MainPage/DrawerIcon.svg'
import Recp from '../assets/SVG/MainPage/Recp.svg'
import { useState } from 'react'
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Pizza from '../assets/SVG/MainPage/Foods/Pizza.svg'
import Chicken from '../assets/SVG/MainPage/Foods/Chicken.svg'
import BreakFast from '../assets/SVG/MainPage/Foods/BreakFast.svg'
import Chinese from '../assets/SVG/MainPage/Foods/Chinese.svg'
import Spag from '../assets/SVG/MainPage/FlatFoods/Spag.svg'
import Spag1 from '../assets/SVG/MainPage/FlatFoods/Spag1.svg'
import Spag2 from '../assets/SVG/MainPage/FlatFoods/Spag2.svg'
import StarRating from 'react-native-star-rating';
import PlusMini from '../component/PlusMini'
import MinusMini from '../component/MinusMini'
import { FoodFlatList } from '../component/FoodFlatList'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainHeader } from '../component/MainHeader'

export default function MainPage(props) {

  const [mode, setMode] = useState(true);
  // const navigation = useNavigation();

  const head = () => {
    return (


      <View style={{ borderTopColor: '#06CE91', borderTopWidth: 0.4, marginHorizontal: 20, top: 10 }}>
        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 20, left: 20, top: 10 }}>Recently Added</Text>
      </View>
    )
  }


  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <StatusBar
        backgroundColor={"white"} />
      <MainHeader Press={() => props.navigation.openDrawer()} />
      {/* date */}
      <View style={{ height: 74, width: 360, top: 17, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#F5FFFC', height: 50, width: 50, borderRadius: 5, top: 10, left: 10, alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Fri
          </Text>

          <Text style={{ color: '#565656', fontSize: 14, fontWeight: '500' }}>
            24
          </Text>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Dec
          </Text>


        </View>

        <View style={{
          backgroundColor: '#05CE91', height: 50, width: 50, borderRadius: 5, top: 10, left: 25, alignItems: 'center', paddingTop: 7
        }}>
          <Text style={{ color: '#ffffff', fontSize: 8 }}>
            Sat
          </Text>

          <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '500' }}>
            25
          </Text>
          <Text style={{ color: '#ffffff', fontSize: 8 }}>
            Dec
          </Text>
        </View>
        <View style={{ backgroundColor: '#F5FFFC', height: 50, width: 50, borderRadius: 5, top: 10, left: 40, alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Sun
          </Text>

          <Text style={{ color: '#565656', fontSize: 14, fontWeight: '500' }}>
            26
          </Text>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Dec
          </Text>
        </View>
        <View style={{ backgroundColor: '#F5FFFC', height: 50, width: 50, borderRadius: 5, top: 10, left: 55, alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Mon
          </Text>

          <Text style={{ color: '#565656', fontSize: 14, fontWeight: '500' }}>
            27
          </Text>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Dec
          </Text>
        </View>
        <View style={{ backgroundColor: '#F5FFFC', height: 50, width: 50, borderRadius: 5, top: 10, left: 70, alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Tue
          </Text>

          <Text style={{ color: '#565656', fontSize: 14, fontWeight: '500' }}>
            28
          </Text>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Dec
          </Text>
        </View>
        <View style={{ backgroundColor: '#F5FFFC', height: 50, width: 50, borderRadius: 5, top: 10, left: 85, alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Wed
          </Text>

          <Text style={{ color: '#565656', fontSize: 14, fontWeight: '500' }}>
            29
          </Text>
          <Text style={{ color: '#565656', fontSize: 8 }}>
            Dec
          </Text>
        </View>

      </View>

      {/* timing */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[MainPageStyles.lucnchTou, { backgroundColor: mode ? "#F5FFFC" : '#05CE91', }]}
          onPress={() => setMode(!mode)}
        >
          <Text style={[MainPageStyles.lunchtext, { color: mode ? '#949494' : '#FFFFFF' }]}>Lunch</Text>
          <Icon1
            style={{ left: 90, top: 5 }}

            name='sun' size={25} color={mode ? '#949494' : '#FFFFFF'} />
        </TouchableOpacity>
        <TouchableOpacity style={[MainPageStyles.dinnerTou, { backgroundColor: mode ? "#05CE91" : '#F5FFFC', }]}
          onPress={() => setMode(!mode)}
        >
          <Text style={[MainPageStyles.lunchtext, { color: mode ? '#ffffff' : '#949494' }]}>Dinner</Text>
          <Icon1
            style={{ left: 90, top: 5 }}

            name='moon' size={25} color={mode ? '#ffffff' : '#949494'} />
        </TouchableOpacity>
      </View>
      {/* search */}
      <View style={{
        backgroundColor: '#ffffff', height: 44, width: 330, top: 55, left: 27,
        shadowColor: '#05CE91',
        borderRadius: 7, elevation: 10, flexDirection: 'row'
      }}>
        <TextInput placeholder='Find the food you crave for...'

          style={{ width: 290, textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-Medium' }}
        />
        <Icon2 style={{ top: 8 }} name='search' size={25} color={'#949494'} />

      </View>
      {/* foods */}
      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity style={{ top: 80, left: 25 }}>
          <Pizza />
        </TouchableOpacity>

        <TouchableOpacity style={{ top: 80, left: 45 }}>
          <BreakFast />
        </TouchableOpacity>

        <TouchableOpacity style={{ top: 80, left: 55 }}>
          <Chicken />
        </TouchableOpacity>

        <TouchableOpacity style={{ top: 80, left: 65 }}>
          <Chinese />
        </TouchableOpacity>

      </View>

      <ScrollView style={{ alignSelf: 'center', top: 100 }}>

        <FoodFlatList />
        <FoodFlatList />
        <FoodFlatList />
        <FoodFlatList />
      </ScrollView >


    </View >
  )
}