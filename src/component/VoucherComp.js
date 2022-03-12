import { View, Text } from 'react-native'
import React from 'react'
import VoucherVector from '../assets/SVG/Vouchers/VoucherVector.svg'
import Miniheader from '../component/Miniheader'
import { useNavigation } from '@react-navigation/native'
import VectorLine from '../assets/SVG/Vouchers/VectorLine.svg'

export default function VoucherComp() {
    return (
        <View style={{ alignSelf: 'center',top:50 }}>
            <VoucherVector />
            <View style={{ flexDirection: 'row', position: 'absolute', top: 15, left: 20 }}>
                <Text style={{ color: "#565656", fontFamily: 'Nunito-Medium', fontSize: 15 }}>
                Refferal Award
                </Text>
                <Text style={{ color: "#05CE91", fontFamily: 'Nunito-Medium', fontSize: 15, left: 188 }}>
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
    )
}