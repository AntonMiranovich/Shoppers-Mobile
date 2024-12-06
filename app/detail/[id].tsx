import ImgBack from "@/assets/images/ImgBack";
import Share from "@/assets/images/share";
import Product from "@/assets/images/Product";
import { StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import storage from '../../storage/index'
import basket from '../../storage/basket'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Detail() {
    const params: any = useLocalSearchParams()
    const router = useRouter()
    const [product, setProduct] = useState<any>([])


    useEffect(() => {
        const filterStorage = storage.filter((el) => el.id == params.id)
        setProduct(filterStorage)
    }, [])

    const animation = useState(new Animated.Value(0))[0]

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


    const addBascet = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(async () => {
            // basket.push(product[0])
            // router.replace('/basket')
            try {
                const gettingData: any = await AsyncStorage.getItem('prod')
                const products = JSON.parse(gettingData) || [];
                products.push(product[0]);
                await AsyncStorage.setItem('prod', JSON.stringify(products))
                router.replace('/basket')
            } catch (error: any) {
                console.error(error.message)
            }
        });
    }

    return (
        <>
            <Animated.View style={{ opacity: animation, gap: 40, alignItems: 'center' }}>
                <View >
                    <Product width={'100%'} height={390} />
                    <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: "90%", marginTop: 52, marginLeft: 15 }}>
                        <TouchableOpacity onPress={() => router.replace('/products')}><ImgBack /></TouchableOpacity>
                        <Share />
                    </View>
                </View>

                <View style={{ gap: 14, marginBottom: 30, width: '80%', alignSelf: 'center' }}>
                    <Text style={styles.text}>{product[0]?.title}</Text>
                    <Text style={styles.text}>Rs.{product[0]?.price}</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={addBascet}> <Text style={styles.titleSing}>Add to Cart</Text> </TouchableOpacity>

                <View style={{ width: '90%', gap: 16 }}>
                    <Text style={{ ...styles.titleSing, color: '#000000' }}>More Details</Text>
                    <Text style={styles.textInfo}>Gear up with the latest collections from
                        adidas Originals, Running, Football, Training.
                        With over 20,000+ products, you will never
                        run out of choice. Grab your favorites now.
                        Secure Payments. 100% Original Products.
                        Gear up with adidas.</Text>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 600
    },
    btn: {
        marginTop: 40,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 16,
        alignItems: 'center',
        width: '70%'
    },
    titleSing: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#4D1717'
    },
    textInfo: {
        width: '90%',
        marginLeft: 20,
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
        color: '#AAA8A8'
    }
})
