import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import Header from '@/components/header';
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from "react";
import Product from '@/assets/images/Product';
import basketStorage, { deleteFromStorage } from '../../storage/basket'
import DelImg from '../../assets/images/delImg'
import { iProducts } from '@/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Products() {
    const [basket, setBasket] = useState<iProducts[]>([]);
    // const [flagForUpdate, setFlagForUpdate] = useState(false);
    const animation = useState(new Animated.Value(0))[0]

    // useEffect(() => { setBasket(basketStorage); }, [flagForUpdate]);



    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
            return () => {
                animation.setValue(0);
            };
        }, [animation]));


    const loadBasket = async () => {
        const gettingData = await AsyncStorage.getItem('prod')
        if (!gettingData) return
        const parsedGettingData = JSON.parse(gettingData)
        if (Array.isArray(parsedGettingData)) {
            setBasket(parsedGettingData);
            console.log('success get', parsedGettingData);
        }
    }

    useEffect(() => {
        loadBasket()
    }, [])

    // const deleteFromBasket = (index: number) => {
    //     deleteFromStorage(index);
    //     setFlagForUpdate(!flagForUpdate)
    // };


    return <Animated.View style={{ opacity: animation, flex: 1, alignItems: 'center', gap: 62 }}>
        <Header />

        <View style={{ width: '80%', gap: 62 }}>
            <View style={{ gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
                {basket.map((el, index) => <View key={index} style={styles.item}>
                    <Product width={136} height={117} />
                    <View style={{ gap: 13 }}>
                        <Text style={styles.text}>{el?.title}</Text>
                        <Text style={styles.textSmall}>Qty: 1</Text>
                        <Text style={styles.text}>Rs. {el?.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.imgDel}> <DelImg /></TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => deleteFromBasket(index)} style={styles.imgDel}> <DelImg /></TouchableOpacity> */}
                </View>
                )}
            </View>

            <View style={{ gap: 29 }}>
                <View style={styles.vector} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textTotal}>Total :</Text>
                    <Text style={styles.textTotal}>Rs.  {basket.reduce((sum, el: any) => sum + el.price, 0)}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}> <Text style={styles.titleSing}>CHECKOUT</Text> </TouchableOpacity>
        </View>
    </Animated.View>;
}


const styles = StyleSheet.create({
    btn: {
        marginTop: 40,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 16,
        alignItems: 'center',
    },
    titleSing: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    item: {
        position: 'relative',
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 600,
        color: 'black'
    },
    textSmall: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 600,
        color: '#827D7D'
    },
    vector: {
        width: '100%',
        height: 1,
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#C6C4C4'
    },
    textTotal: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 700,
        color: 'black'
    },
    imgDel: {
        position: 'absolute',
        top: 15,
        right: 15,
    }
})

export default Products;