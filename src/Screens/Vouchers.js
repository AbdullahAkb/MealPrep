import { View, Text, FlatList } from 'react-native'
import React from 'react'
import VoucherVector from '../assets/SVG/Vouchers/VoucherVector.svg'
import Miniheader from '../component/Miniheader'
import { useNavigation } from '@react-navigation/native'
import VectorLine from '../assets/SVG/Vouchers/VectorLine.svg'
import VoucherComp from '../component/VoucherComp'
import { ScrollView } from 'react-native-gesture-handler'



export default function Vouchers() {

    const navigation = useNavigation();


    const Voucher = [
        { id: 1, voucher: <VoucherComp /> },
        { id: 2, voucher: <VoucherComp /> },
        { id: 3, voucher: <VoucherComp /> },
        { id: 4, voucher: <VoucherComp /> },
        { id: 5, voucher: <VoucherComp /> },
        { id: 6, voucher: <VoucherComp /> },
        { id: 8, voucher: <VoucherComp /> },
        { id: 9, voucher: <VoucherComp /> },
        { id: 10, voucher: <VoucherComp /> },
        { id: 11, voucher: <VoucherComp /> },

    ];

    const render = ({ item }) => {
        return (
            <View style={{ padding: 10, }}>
                {item.voucher}
            </View>
        )


    }


    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
                <Miniheader title="Vouchers" Press={() => { navigation.navigate('Home') }} />
            </View>


            <View style={{ top: 50, alignSelf: 'center' }}>
                <VoucherVector />
                <View style={{ flexDirection: 'row', position: 'absolute', top: 15, left: 20 }}>
                    <Text style={{ color: "#565656", fontFamily: 'Nunito-Medium', fontSize: 15 }}>
                        Welcome Voucher
                    </Text>
                    <Text style={{ color: "#05CE91", fontFamily: 'Nunito-Medium', fontSize: 15, left: 170 }}>
                        $5.00
                    </Text>
                </View>
                <Text style={{ position: 'absolute', color: "#949494", fontFamily: 'Nunito-Medium', fontSize: 12, left: 20, top: 35 }}>
                    vd4jdo
                </Text>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 52, left: 20 }}>
                    <Text style={{ color: "#565656", fontFamily: 'Nunito-Medium', fontSize: 12 }}>
                        $10 minimum
                    </Text>
                    <Text style={{ color: "#949494", fontFamily: 'Nunito-Medium', fontSize: 12, left: 135 }}>
                        Expires on
                    </Text>
                    <Text style={{ color: "#565656", fontFamily: 'Nunito-Medium', fontSize: 12, left: 140 }}>
                        22 Apr 2021
                    </Text>
                </View>
                <View style={{ position: 'absolute', top: 75, left: 29 }}>
                    <VectorLine />
                </View>
                <Text style={{ position: 'absolute', color: "#949494", fontFamily: 'Nunito-Medium', fontSize: 13, left: 113, top: 80 }}>
                    Terms and Conditions Apply
                </Text>
            </View>
            {/* <View style={{paddingTop:10,top:50}}> */}
                <FlatList
                    data={Voucher}
                    renderItem={render}
                    keyExtractor={item => item.id}
                    // style={{ Bottom: 80 }}
                />
            {/* </View> */}


        </View>
    )
}