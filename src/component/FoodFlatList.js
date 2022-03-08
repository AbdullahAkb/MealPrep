import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import MainPageStyles from '../assets/Styles/MainPageStyles'
import DrawerIcon from '../assets/SVG/MainPage/DrawerIcon.svg'
import Recp from '../assets/SVG/MainPage/Recp.svg'
import { useState } from 'react'
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Pizza from '../assets/SVG/MainPage/Foods/Pizza.svg'
import Chicken from '../assets/SVG/MainPage/Foods/Chicken.svg'
import BreakFast from '../assets/SVG/MainPage/Foods/BreakFast.svg'
import Chinese from '../assets/SVG/MainPage/Foods/Chinese.svg'
import Spag from '../assets/SVG/MainPage/FlatFoods/Spag.svg'
import Spag1 from '../assets/SVG/MainPage/FlatFoods/Spag1.svg'
import Spag2 from '../assets/SVG/MainPage/FlatFoods/Spag2.svg'
import StarRating from 'react-native-star-rating';
import PlusMini from '../component/PlusMini'
import MinusMini from '../component/MinusMini'




const renderFunc = ({ item }) => {


    return (


        <View style={{
            width: 151, height: 175, top: 10, backgroundColor: 'white', elevation: 1,
            shadowColor: '#05CE91', marginHorizontal: 10, borderRadius: 10, marginBottom: 25
        }}>

            <View style={{ width: 151, height: 112 }}>
                {item.image}
            </View>

            <Text style={MainPageStyles.loremText}>Lorem Ipsum Sit (Amet)</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 10, top: 7, left: 3 }}>Red Poke</Text>

                <View style={{ left: 40, top: 8 }}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4.5}
                        starSize={8}
                        fullStarColor={"#FFD213"}

                    />
                </View>
                <Text style={{ fontSize: 10, color: '#565656', fontFamily: 'Nunito-Medium', left: 45, top: 6 }}>(221)</Text>
            </View>
            <View style={{ flexDirection: 'row', top: 15, left: 3 }}>
                <MinusMini Press={() => minus} />
                <Text style={{ left: 5, bottom: 1 }}>{counter}</Text>
                <PlusMini
                    Press={() => add} />


                <Text style={{
                    color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 13
                    , left: 70
                }}>$24.99</Text>

            </View>


        </View>

    )
}


const FoodFlatList = () => {

    const renderFunc = ({ item }) => {


        return (


            <View style={{
                width: 151, height: 175, top: 20, backgroundColor: 'white', elevation: 4,
                shadowColor: '#05CE91', marginHorizontal: 10, borderRadius: 10, marginBottom: 25
            }}>

                <View style={{ width: 151, height: 112 }}>
                    {item.image}
                </View>

                <Text style={MainPageStyles.loremText}>Lorem Ipsum Sit (Amet)</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 10, top: 7, left: 3 }}>Red Poke</Text>

                    <View style={{ left: 40, top: 8 }}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={4.5}
                            starSize={8}
                            fullStarColor={"#FFD213"}

                        />
                    </View>
                    <Text style={{ fontSize: 10, color: '#565656', fontFamily: 'Nunito-Medium', left: 45, top: 6 }}>(221)</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 15, left: 3 }}>
                    <MinusMini Press={() => minus} />
                    <Text style={{ left: 5, bottom: 1 }}>{counter}</Text>
                    <PlusMini
                        Press={() => add} />


                    <Text style={{
                        color: '#949494', fontFamily: 'Nunito-Medium', fontSize: 13
                        , left: 70
                    }}>$24.99</Text>

                </View>


            </View>

        )
    }
    const add = () => {
        setCounter(counter + 1);
    }

    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }


    const datafoods = [

        { id: 1, image: <Spag /> },
        { id: 2, image: <Spag1 /> },
        { id: 3, image: <Spag2 /> },
    ];
    const [counter, setCounter] = useState(1);


    return (
        <View style={{ top: 10 }}>
            <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 20, left: 20, top: 10 }}>Recently Added</Text>
            <FlatList
                horizontal={true}
                data={datafoods}
                renderItem={renderFunc}
                keyExtractor={item =>  item.id }
                showsHorizontalScrollIndicator={false}

            />
        </View>
    )
}

export { FoodFlatList } 