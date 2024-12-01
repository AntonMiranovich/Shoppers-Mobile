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


    return <Animated.View style={{ opacity: animation, gap: '30%', flex: 1, }}>
        <Header />
        <View style={styles.wrapper}>
            <Text style={styles.text}>Hello SIlva</Text>
            <TouchableOpacity style={styles.btn}> <Text style={styles.titleSing}>SIGN OUT</Text> </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginLeft: '10%' }} onPress={pressGoBack}><ImgBack /></TouchableOpacity>
    </Animated.View>;
}

const styles = StyleSheet.create({
    wrapper: {
        width: '70%',
        alignItems: 'center',
        marginHorizontal: 'auto',
        gap: 86
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 32,
        color: '#000'
    },
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
        color: '#000000'
    },
})

export default Products;