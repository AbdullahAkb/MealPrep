import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import Miniheader from '../component/Miniheader'
import { useNavigation } from '@react-navigation/native'
import Fav from '../component/Fav'


export default function Favourites(props) {

  const navigation = useNavigation();

  const FavData = [
    { id: 1, image: <Fav /> },
    { id: 2, image: <Fav /> },
    { id: 3, image: <Fav /> },
    { id: 4, image: <Fav /> },
    { id: 5, image: <Fav /> },
    { id: 6, image: <Fav /> },
    { id: 8, image: <Fav /> },
    { id: 9, image: <Fav /> },
    { id: 10, image: <Fav /> },
    { id: 11, image: <Fav /> },

  ];


  const render = ({ item }) => {
    return (
      <View style={{padding:10}}>
        {item.image}
      </View>
    )


  }


  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar
        backgroundColor='white'
        barStyle={'dark-content'}
      />
      <Miniheader title="Favourites" Press={()=>{props.navigation.navigate('Home')}}/>
      {/* <Fav /> */}

      <FlatList
        data={FavData}
        renderItem={render}
        keyExtractor={item => item.id}
        style={{marginTop:50}}
      />

    </View>
  )
}