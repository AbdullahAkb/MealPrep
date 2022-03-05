import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonUni(props) {
  return (
    <View>
      <TouchableOpacity style={Styles.location}
        activeOpacity={0.5}
        onPress={() => props.Press()}
      >
        <Text style={[Styles.text, { fontFamily: 'Nunito-Medium' }]}>
          {props.title}
        </Text>

      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  location:
  {
    height: 44,
    width: 300,
    backgroundColor: '#05CE91',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 7,


  },
  text:
  {
    color: '#FFFFFF',
    textAlign: 'center',
    top: 12,
    fontSize: 20,
    // fontFamily:'Nunito-Medium'
    // fontWeight:'500'

  }
})