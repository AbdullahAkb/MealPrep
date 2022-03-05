import { StyleSheet } from "react-native";


const WelcomeStyles = StyleSheet.create({
    main:
    {
        backgroundColor: "#FFFFFF",
        flex: 1,

        alignItems: 'center'

    },
    logo:
    {
        top:
            160,

    },
    good:
    {
        top: 200,
        color: '#565656',
        fontSize: 15,
        fontWeight: '500'
    },

    welcome:
    {
        fontSize: 40,
        color: "#07CE92",
        // fontWeight: '400',
        fontFamily: 'Hello Valentina'
    },
    intro:
    {
        color: 'black',
        fontWeight: '400',
        fontSize: 25,
        
        left: 5
    },
    area:
    {
        top: 190
    },
    check:
    {
        fontSize: 22,
        textAlign: 'center',
        color: '#565656'
    },
    check2:
    {
        fontSize: 18,
        color: '#565656',
    },
    textinput:
    {
        height: 50,
        width: 300,
        // borderWidth: 1,
        elevation: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#05CE91',
        flexDirection: 'row',
        top: 200, borderRadius: 7
    },
    TextInput:
    {
        height: 50,
        width: 270,
        left: 20,
        fontSize: 16

    },
    map:
    {
        top: 14
    }

})


export default WelcomeStyles; 