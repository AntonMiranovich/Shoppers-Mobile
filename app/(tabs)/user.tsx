import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import Header from '@/components/header';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



function Products() {
    const router = useRouter()
    const animation = useState(new Animated.Value(0))[0]
    const [login, setLogin] = useState('')

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

    const loadPages = async () => {
        const loginUser: any = await AsyncStorage.getItem('login')
        setLogin(JSON.parse(loginUser))
    }

    useEffect(() => {
        loadPages()
    }, [])



    return <Animated.View style={{ opacity: animation, gap: '30%', flex: 1, }}>
        <Header />
        <View style={styles.wrapper}>
            <Text style={styles.text}>Hello {login}</Text>
            <TouchableOpacity onPress={() => router.replace('/login')} style={styles.btn}> <Text style={styles.titleSing}>SIGN OUT</Text> </TouchableOpacity>
        </View>
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