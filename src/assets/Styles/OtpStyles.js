import { StyleSheet } from "react-native";

const OtpStyles = StyleSheet.create({
    arrow:
    {
        left: 20,
        top: 20,

    },
    forgotText:
    {
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: '#565656'
    },
    Textcode:
    {
        color: '#565656',
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        textAlign: 'center'
    },
    send:
    {
        height: 18,
        width: 74,
        top: 295,
        alignSelf: 'center'
    },
    underlineStyleBase:
    {
        backgroundColor: '#F2F2F2',
        marginLeft:10,
        height: 38, width: 32,
        borderRadius:10,
        borderColor:'#F2F2F2'


        
    }
})

export default OtpStyles;