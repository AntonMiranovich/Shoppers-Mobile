import CreateInputForm from "@/components/createInputForm";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native'

export default function singup() {
    const inpForm = [
        {
            id: 1,
            title: 'name',
            secure: false
        },
        {
            id: 2,
            title: 'email',
            secure: false
        },
        {
            id: 3,
            title: 'password',
            secure: false
        },
    ]

    const [user, setUser] = useState({ name: '', email: '', password: '' })

    const changesUser = (value: any, tag: any) => {
        setUser({ ...user, [tag]: value });
    };

    const router = useRouter()

    const auth = () => {
        try {
            if (!user.name || !user.password || !user.email) throw new Error('одно из полей не заполнено')
            if (user.password.length < 8) throw new Error('пороль менее 8 символов')

            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                router.push('/login');
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

    const pressGoLogin = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            router.push('/login');
        });
    };


    return (
        <>
            <Animated.View style={{ opacity: animation, alignItems: 'center', gap: 67, flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginTop: 120, gap: '' }}>
                    <Text style={styles.titleBig}>Welcome!</Text>
                    <Text style={styles.titleSmall}>Create a new account</Text>
                </View>

                <CreateInputForm  inpForm={inpForm} nameBtn={'SIGN UP'} changesUser={changesUser} auth={auth} />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Already have an account? </Text>
                    <TouchableOpacity onPress={pressGoLogin}>
                        <Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View >
        </>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 700,
        color: '#000000'
    },
    titleSmall: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#606060'
    },
    textFooter: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
    }
})