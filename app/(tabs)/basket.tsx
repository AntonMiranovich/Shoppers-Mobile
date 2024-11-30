import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import Header from '@/components/header';
import ImgBack from '@/assets/images/ImgBack';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from "react";



function Products() {
    const router = useRouter()

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


    return <Animated.View style={{ opacity: animation, flex: 1, }}>
        <Header />

        <TouchableOpacity style={{ marginLeft: '10%' }} onPress={pressGoBack}><ImgBack /></TouchableOpacity>
    </Animated.View>;
}

const styles = StyleSheet.create({
    btn: {
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
        color: '#D04444'
    },
})

export default Products;