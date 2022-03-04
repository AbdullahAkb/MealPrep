import { StyleSheet } from "react-native";


const LocationStyles = StyleSheet.create({


    header: {
        height: 64,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row'
    },
    arrow:
    {
        left: 20,
        top: 20,

    },
    input:
    {
        height: 39,
        width: 265,
        left: 37,
        top: 13,
        
        backgroundColor: '#F2F2F2',
        borderRadius: 7

    },
    map:
    {
        left: 55,
        top: 20
    },
    textInput:
    {
        height: 39,
        width: 265,
        fontSize: 16,
        color: '#565656',
        textAlign:'center',
        fontFamily: 'Nunito-Medium'

    },
    location:
    {
        height: 44,
        width: 300,
        backgroundColor: '#05CE91',
        alignSelf: 'center',
        position: 'absolute',
        top: 680.87,
        borderRadius: 7,


    },
    text:
    {
        color: '#FFFFFF',
        textAlign: 'center',
        top: 12,
        fontSize: 18,
        // fontFamily:'Nunito-Medium'
        // fontWeight:'500'

    }
})

export default LocationStyles;