import CreateInputForm from "@/components/createInputForm";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {
    const inpForm = [
        {
            id: 1,
            title: 'username',
            secure: false
        },
        {
            id: 2,
            title: 'password',
            secure: true
        },
    ]

    const [user, setUser] = useState({ username: '', password: '' })

    const router = useRouter()

    const changesUser = (value: any, tag: any) => {
        setUser({ ...user, [tag]: value });
    };

    const auth = () => {
        try {
            if (!user.username || !user.password) throw new Error('одно из полей не заполнено')
            if (user.password.length < 8) throw new Error('пороль менее 8 символов')

            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(async () => {
                await AsyncStorage.setItem('login', JSON.stringify(user.username))
                router.push('/user');
            });
        } catch (error: any) {
            console.log(error.message);
        }
    }

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

    const pressGoSignIn = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            router.push('/singup');
        });
    };


    return (
        <>
            <Animated.View style={{ opacity: animation, flex: 1 }}>
                <View style={{ alignItems: 'center', gap: 67 }}>
                    <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                        <Text style={styles.titleBig}>Welcome Back !</Text>
                        <Text style={styles.titleSmall}>Login with Username & password</Text>
                    </View>

                    <CreateInputForm inpForm={inpForm} nameBtn={'SIGN IN'} changesUser={changesUser} auth={auth} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account? </Text>
                        <TouchableOpacity onPress={pressGoSignIn}>
                            <Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 400,
        color: '#000000'
    },
    titleSmall: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
        color: '#606060'
    },
    textFooter: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
    }
})
