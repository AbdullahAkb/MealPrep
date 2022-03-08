import { StyleSheet } from "react-native";

const MainPageStyles = StyleSheet.create({
    header:
    {
        backgroundColor: '#ffffff',
        height: 64,
        elevation: 10,
        top: 1,
        shadowColor: '#05CE91',
        borderBottomLeftRadius: 7,
        flexDirection: 'row'

    },
    lucnchTou:
    {
        height: 35, width: 160, top: 30,
        borderRadius: 5,
        flexDirection: 'row',
        left: 20,
    },
    lunchtext:
    {
        left: 20,
        fontSize:15,
        fontFamily:'Nunito-Medium',
        top:7
    },
    dinnerTou:
    {
        height: 35, width: 160, top: 30,
        borderRadius: 5,
        flexDirection: 'row',
        left: 40,
    },
    loremText:
    {
        fontFamily:'Nunito-Medium',
        fontSize:12,
        color:'#565656',
        left:3,top:5
    }
})


export default MainPageStyles;