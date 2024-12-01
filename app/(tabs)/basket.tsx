import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import Header from '@/components/header';
import ImgBack from '@/assets/images/ImgBack';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from "react";
import Product from '@/assets/images/Product';


function Products() {
    const router = useRouter()

    const obj = [
        {
            id: 1,
            title: 'Adidas Shoe',
            price: 20000,
            Qty: 1
        },
        {
            id: 2,
            title: 'Adidas Shoe',
            price: 20000,
            Qty: 1
        },
    ]

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

    const pressGoBack = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            router.back()
        });
    };


    return <Animated.View style={{ opacity: animation, flex: 1, alignItems: 'center', gap: 62 }}>
        <Header />
        
        <View style={{ width: '80%', gap: 62 }}>
            <View style={{ gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
                {obj.map((el) => <View key={el.id} style={styles.item}>
                    <Product />
                    <View style={{ gap: 13 }}>
                        <Text style={styles.text}>{el?.title}</Text>
                        <Text style={styles.textSmall}>Qty: {el.Qty}</Text>
                        <Text style={styles.text}>Rs. {el?.price}</Text>
                    </View>
                </View>
                )}
            </View>

            <View style={{ gap: 29 }}>
                <View style={styles.vector} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textTotal}>Total :</Text>
                    <Text style={styles.textTotal}>Rs.40000.00</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}> <Text style={styles.titleSing}>CHECKOUT</Text> </TouchableOpacity>
            <TouchableOpacity onPress={pressGoBack}><ImgBack /></TouchableOpacity>
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
})

export default Products;