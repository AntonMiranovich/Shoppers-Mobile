import CreateInputForm from "@/components/createInputForm";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

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

            router.push('/products')
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const animation = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [animation]);

    return (
        <form style={{ flex: 1 }}>
            <Animated.View style={{ opacity: animation }}>
                <View style={{ alignItems: 'center', gap: 67 }}>
                    <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                        <Text style={styles.titleBig}>Welcome Back !</Text>
                        <Text style={styles.titleSmall}>Login with Username & password</Text>
                    </View>

                    <CreateInputForm inpForm={inpForm} nameBtn={'SIGN IN'} changesUser={changesUser} auth={auth} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account? </Text>
                        <Link href={'/singup'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline', }]}>Sign Up</Text></Link>
                    </View>
                </View >
            </Animated.View>
        </form>
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
