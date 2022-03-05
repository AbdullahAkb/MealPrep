import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    arrow:
    {
        left: 20,
        top: 20,

    },
    loginText:
    {
        fontFamily: 'Hello Valentina',
        fontSize: 45,
        textAlign: 'center',
        color: '#05CE91',
        top: 210
    },
    inputtextArea:
    {
        height: 44,
        width: 300,
        backgroundColor: '#F2F2F2',
        top: 230,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 7

    },
    TextInputFi:
    {
        height: 44,
        width: 260,
        left: 20,
        fontFamily: 'Nunito-Medium',
        fontSize: 15,
        color: '#949494'
    },
    inputtextArea1:
    {
        height: 44,
        width: 300,
        backgroundColor: '#F2F2F2',
        top: 245,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 7

    },
    forgotfield:
    {
        height: 18,
        width: 130,
        // backgroundColor: 'black',
        alignItems: 'center',
        top: 260,
        alignSelf: 'center'
    },
    forgot:
    {
        color: '#05CE91',
        // textAlign:'center',
        fontFamily: 'Nunito-Medium',
        fontSize: 16
    },
    Google:
    {
        height: 44,
        width: 300,
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
        top: 370,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    googleText:
    {
        color: '#949494',
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        alignSelf: 'center',
        left: 55
    },
    FaceBook:
    {
        height: 44,
        width: 300,
        backgroundColor: '#4179EB',
        elevation: 4,
        borderRadius: 7,
        top: 390,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    facebookText:
    {
        color: '#ffffff',
        fontFamily: 'Nunito-Medium',
        fontSize: 18,
        alignSelf: 'center',
        left: 55
    }
})

export default LoginStyles;