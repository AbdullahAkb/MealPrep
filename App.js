import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import InputTextField from './src/component/InputTextField'
import MinusMini from './src/component/MinusMini'
import PlusMini from './src/component/PlusMini'
import Miniheader from './src/component/Miniheader'

import Favourites from './src/Screens/Favourites'
import Fav from './src/component/Fav'



export default function App() {
  return (
    <StackNavigation />
    // <Miniheader />
    // <Favourites />
    // <Fav />
  )
}