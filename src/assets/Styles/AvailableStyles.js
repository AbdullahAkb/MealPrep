import { StyleSheet } from "react-native";


const AvailableStyles = StyleSheet.create({
    arrow:
    {
        left: 20,
        top: 20,

    },
    cong:
    {
        textAlign: 'center',
        top: 200,
        color: '#05CE91',
        fontFamily: 'Hello Valentina',
        fontSize: 53
    },
    textinput:
    {
        height: 50,
        width: 300,
        alignSelf: 'center',
        elevation: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#05CE91',
        flexDirection: 'row',
        top: 220, borderRadius: 7
    },
    TextInput:
    {
        height: 50,
        width: 270,
        left: 20,
        fontSize: 16,
        color: '#565656',
        fontFamily: 'Nunito-Medium'

    },
    map:
    {
        top: 14
    },
    acc:
    {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Nunito-Medium',
        top: 315,
        color: '#565656'
    },
    Register:
    {
        height: 22,
        width: 64,
        // backgroundColor: '#05CE91',
        top: 320,
        left: 132
    }
})

export default AvailableStyles;