import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import SplashStyles from '../../assets/Styles/SplashStyles'
import SplashLogo from '../../assets/SVG/Splash/SplashLogo.svg'


export default function Splash() {



  const navigation = useNavigation();


  useEffect(() => {



    setTimeout(() => { navigation.replace('welcome') },
      2000
    );


  }, [])



  return (
    <View style={SplashStyles.main}>


      <StatusBar
        backgroundColor='#05CE91'
      />
      {/* <Image 
      style={SplashStyles.image}
      
      source={require('../../assets/images/splashimage/splash.png')}/> */}
      <SplashLogo/>
    </View>
  )
}